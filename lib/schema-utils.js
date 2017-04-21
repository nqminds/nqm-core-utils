module.exports = (function() {
  "use strict";

  var log = require("debug")("nqm-utils:schema-utils");
  var errLog = require("debug")("nqm-utils:schema-utils:error");
  var Promise = require("bluebird");
  var _ = require("lodash");
  var constants = require("nqm-core-constants");

  // From mongoose/lib/schema.js
  var reservedFieldNames = [
    "_id",              // <---- TDX specific
    "prototype",
    // EventEmitter
    "emit",
    "on",
    "once",
    "listeners",
    "removeListener",
    // document properties and functions
    "collection",
    "db",
    "errors",
    "init",
    "isModified",
    "isNew",
    "get",
    "modelName",
    "save",
    "schema",
    "set",
    "toObject",
    "validate",
    "remove",
    // hooks.js
    "_pres",
    "_posts"
  ];

  // Convert from simple array list to TDX index format.
  // Assume ascending sort direction.
  // e.g. ["id", "code"] => [{asc: "id"}, {asc: "code"}]
  //
  // Will also convert from mongoose index spec to tdx format.
  // e.g. {id: 1, code: -1} => [{asc: "id"}, {desc: "code"}]
  //
  var indexToTDX = function(indexFields, errList) {
    var tdxIndex = [];

    if (Array.isArray(indexFields)) {
      _.forEach(indexFields, function(fieldSpec, idx) {
        if (typeof fieldSpec === "string") {
          tdxIndex.push({"asc": fieldSpec});
        } else if (fieldSpec.asc || fieldSpec.desc) {
          tdxIndex.push(fieldSpec);
        } else {
          errList.push("invalid index spec: " + JSON.stringify(fieldSpec));          
        }
      });
    } else if (typeof indexFields === "object") {
      _.forEach(indexFields, function(sortDirection, key) {
        if (sortDirection === -1) {
          tdxIndex.push({desc: key});
        } else {
          tdxIndex.push({asc: key});
        }
      });
    }

    return tdxIndex;
  };

  var validateTDXType = function(type, errList) {
    var properType;
    type = type.toLowerCase();
    if (!constants.mongooseTypes[type]) {
      errList.push("invalid base type: " + type);
    } else {
      properType = type;
    }
    return properType;
  };

  // Converts a schema from mongoose to TDX format.
  var schemaToTDX = function(schema, errList) {
    if (typeof schema === "object") {    
      _.forEach(schema, function(value, key) {
        if (key === "__tdxType") {
          // Ensure array type list.
          schema[key] = [].concat(value);
        } else if (key === "__tdxRequired" || key === "__tdxDefault" || key === "__tdxDescription") {
          // Do nothing.
        } else if (Array.isArray(value)) {
          if (value.length === 1) {
            value[0] = schemaToTDX(value[0], errList);
          } else {
            // Assume a 'mixed' mongoose type.
            schema[key] = [];
          }
        } else if (typeof value === "object") {
          // Recurse for sub-documents
          schema[key] = schemaToTDX(value, errList);
        } else if (key === "type" && typeof value === "string") {
          // A mongoose-style {type: "String"} specification.
          // Convert to TDX format.
          schema.__tdxType = [validateTDXType(value, errList)];
          delete schema.type;
        } else if (typeof value === "string") {
          schema[key] = {__tdxType: [validateTDXType(value, errList)]};
        } else {
          errList.push("invalid schema definition, unexpected: " + schema);
        }
      });

      return schema;
    } else if (typeof schema === "string") {
      return {__tdxType: [validateTDXType(schema, errList)]};
    } else {
      errList.push("invalid schema definition, unexpected: " + schema);
    }
  };

  var validateMongooseType = function(type, errList) {
    var properType;
    type = type.toLowerCase();
    if (!constants.mongooseTypes[type]) {
      errList.push("invalid base type: " + type);
    } else {
      properType = _.capitalize(type);
    }
    return properType;
  };

  var schemaToMongoose = function(schema, errList) {
    errList = errList || [];

    _.each(schema, function(v, k) {
      if (reservedFieldNames.indexOf(k) >= 0) {
        errLog("invalid field name (reserved): %s", k);
        errList.push("invalid field name (reserved): " + k);
      } else if (k === "__tdxRequired") {
        schema.required = schema.__tdxRequired;
        delete schema.__tdxRequired;
      } else if (k === "__tdxDefault") {
        schema.default = schema.__tdxDefault;
        delete schema.__tdxDefault;
      } else if (k === "__tdxDescription") {
        // Remove this as it's TDX documentation.
        delete schema.__tdxDescription;
      } else if (k === "__tdxType") {
        // This is an explicit type specification,  e.g. { __tdxType: ["string","geographic","address","postcode"]}
        if (!v) {
          errLog("unexpected __tdxType value: %j", v);
          errList.push("missing __tdxType");
        } else {
          // Ensure type is an array.
          v = [].concat(v);
          delete schema.__tdxType;
          // The base type is the first element and should be a valid mongoose type
          schema.type = v[0].toLowerCase();
          if (schema.type === "object") {
            schema = {};
          } else if (schema.type === "array") {
            schema = [];
          } else {
            schema.type = validateMongooseType(schema.type, errList);
          }
        }
      } else if (Array.isArray(v)) {
        // Array
        if (v.length > 1) {
          errList.push("invalid array type specification for key: " + k);
        } else if (v.length > 0) {
          if (typeof v[0] === "string") {
            schema[k] = {type: validateMongooseType(v[0], errList)};
          } else {
            schema[k] = [schemaToMongoose(v[0], errList)];
          }
        }
      } else if (typeof v === "object") {
        // Sub-document
        schema[k] = schemaToMongoose(v, errList);
      } else if (typeof v !== "string") {
        // TODO - review
        // Don't treat this as an error, just ignore.
        // Seems to be caused be some legacy schema definitions with { default: true, required: true } etc.
        // errList.push("invalid schema definition - unexpected type for key '" + k + "': " + (typeof v));
        errLog("invalid schema definition - unexpected type for key '" + k + "': " + (typeof v));
        delete schema[k];
      } else {
        schema[k] = {type: validateMongooseType(v, errList)};
      }
    });

    return schema;
  };

  var definitionToMongoose = function(name, tdxSchema) {
    var uniqueIndex = tdxSchema.uniqueIndex;
    var indexes = tdxSchema.nonUniqueIndexes;

    // Convert any given indexes to mongodb format 
    //
    // Because these dynamic schema definitions are stored in mongodb as documents,
    // we have to store them in a backwards fashion as mongodb does not allow
    // key names to contain periods. For example, if the index was saved
    // as { "address.postcode": 1 } mongodb would complain about "address.postcode".
    //     
    // So we store indexes (which are likely to contain dots e.g. if indexing
    // on nested document) in the form:
    //
    // { "asc": "my.nested.key" } or { "desc": "address.postcode" }
    //q
    // Here we convert this stored format to mongodb format so the index can be created.
    // 
    // The 'indexes' parameter should be an array of arrays of index specifiers, e.g.
    // the following specifies two indexes, one is a compound index on account and order,
    // the other is an individual index on completedAt:
    //
    // [ [ { "asc": "account" }, { "asc": "order" } ], [ {"asc": "completedAt" } ] ]
    //
    // this should translate to a single array of objects, e.g.:
    //
    // [ { account: 1 , order: 1 }, { completedAt: 1} ]
    //
    var nonUniqueIndexes = [];
    _.forEach(indexes, function(nonUniqueIndex) {
      if (nonUniqueIndex.length > 0) {
        var index = {};
        _.forEach(nonUniqueIndex, function(i) {
          index[i.asc || i.desc] = (i.asc ? 1 : -1);
        });
        nonUniqueIndexes.push(index);        
      }
    });
    log("translated non unique indexes for %s from %j to %j", name, indexes, nonUniqueIndexes);

    // Do the same for the unique index.
    // Use the 'uniqueIndex' parameter to set the PK of the schema.
    // Do this rather than use the built-in mongoose specification in order
    // to support compound indexes, where the order of fields is important.
    //
    // See comment above for index format explanation.
    var primaryIndex = {};
    _.forEach(uniqueIndex, function(i) {
      primaryIndex[i.asc || i.desc] = (i.asc ? 1 : -1);
    });
    log("translated primary index for %s from %j to %j", name, uniqueIndex, primaryIndex);
        
    //
    // Remove all index information from the schema, as we set the indexes
    // manually below.
    //        
    log("transforming schema for %s: %j", tdxSchema.id, tdxSchema.dataSchema);
    var errList = [];
    var mongooseSchema = schemaToMongoose(tdxSchema.dataSchema, errList);
    if (errList.length) {
      throw new Error("invalid mongoose schema: " + errList.join(","));
    }

    log("schema transformed to %j", mongooseSchema);

    return {
      schema: mongooseSchema,
      uniqueIndex: primaryIndex,
      nonUniqueIndexes: nonUniqueIndexes
    };
  }

  return {
    definitionToMongoose: definitionToMongoose,
    schemaToMongoose: function(tdxSchema, errList) {
      return schemaToMongoose(_.cloneDeep(tdxSchema), errList);
    },
    schemaToTDX: function(mongooseSchema, errList) {
      return schemaToTDX(_.cloneDeep(mongooseSchema), errList);
    },
    indexToTDX: indexToTDX
  }
}());