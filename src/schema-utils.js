/* eslint-disable no-underscore-dangle */
import debug from "debug";
import _ from "lodash";
import constants from "./constants";

const log = debug("nqm-core-utils:schema-utils");
const errLog = debug("nqm-core-utils:schema-utils:error");

// From mongoose/lib/schema.js
const reservedFieldNames = [
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
  "_posts",
  "__update",         // <---- TDX specific
];

const vocabTypeLookupMongoose = function(vocab, id) {
  const vocabDefinition = _.find(vocab, (v) => v.id === id);
  return vocabDefinition && vocabDefinition.basedOn[0];
};

const vocabTypeLookupTDX = function(vocab, id) {
  const vocabDefinition = _.find(vocab, (v) => v.id === id);
  return vocabDefinition && vocabDefinition.basedOn.concat(vocabDefinition.id);
};

// Convert from simple array list to TDX index format.
// Assume ascending sort direction.
// e.g. ["id", "code"] => [{asc: "id"}, {asc: "code"}]
//
// Will also convert from mongoose index spec to tdx format.
// e.g. {id: 1, code: -1} => [{asc: "id"}, {desc: "code"}]
//
const indexToTDX = function(indexFields, errList) {
  const tdxIndex = [];
  errList = errList || [];

  if (Array.isArray(indexFields)) {
    _.forEach(indexFields, function(fieldSpec) {
      if (typeof fieldSpec === "string") {
        tdxIndex.push({"asc": fieldSpec});
      } else if (fieldSpec.asc || fieldSpec.desc) {
        tdxIndex.push(fieldSpec);
      } else {
        errList.push(`invalid index spec: ${JSON.stringify(fieldSpec)}`);
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

const indexToMongoose = function(index) {
  const mongooseIndex = {};
  _.forEach(index, function(i) {
    mongooseIndex[i.asc || i.desc] = (i.asc ? 1 : -1);
  });

  return mongooseIndex;
};

const validateTDXType = function(vocab, type, errList) {
  let properType = vocabTypeLookupTDX(vocab, type);
  if (!properType) {
    type = type.toLowerCase();
    if (!constants.mongooseTypes[type]) {
      errList.push(`invalid base type: ${type}`);
    } else {
      properType = [type];
    }
  }

  return properType;
};

/**
 * Converts a schema from mongoose to TDX format.
 * n.b. recursive
 * @param  {} schema
 * @param  {} errList
 */
const schemaToTDX = function(vocab, schema, errList) {
  if (typeof schema === "object") {
    _.forEach(schema, function(value, key) {
      if (key === "__tdxType") {
        // Ensure array type list.
        schema.__tdxType = [].concat(value);
      } else if (key === "type") {
        // Convert to TDX format.
        if (typeof value === "string") {
          // A mongoose-style type specification, e.g. {"name": {"type": "string"}}
          // Convert to array type spec.
          schema.__tdxType = validateTDXType(vocab, value, errList);
          delete schema.type;
        } else if (Array.isArray(value)) {
          // An array type spec.
          if (value.length) {
            if (typeof value[0] === "object") {
              // A type specification for a type named 'type' as an array, groan...
              // e.g. {type: [{type: "string"}]} - an array of strings
              schema[key] = schemaToTDX(vocab, value, errList);
            } else {
              // A mixed mongoose/TDX type specification, e.g. {"name": {"type": ["string", "resourceId", "datasetId"]}}
              // A TDX-style list of vocab hierarchy => already TDX format, but validate root type
              validateTDXType(vocab, value[0], errList);
              schema.__tdxType = value;
              delete schema.type;
            }
          } else {
            // An emtpy array for the 'type' key => assume a 'mixed' mongoose type.
            schema[key] = [];
          }
        } else if (typeof value === "object") {
          // An object spec => recurse
          schema[key] = schemaToTDX(vocab, value, errList);
        } else {
          errList.push(`invalid schema definition, invalid 'type' spec: ${schema}`);
        }
      } else if (key === "__tdxRequired" || key === "__tdxDefault" || key === "__tdxDescription") {
        // Do nothing.
      } else if (Array.isArray(value)) {
        if (value.length === 1) {
          value[0] = schemaToTDX(vocab, value[0], errList);
        } else if (value.length) {
          // Multi-value array => a mongoose-style TDX vocab list, e.g. {cost: ["number", "currency"]}
          schema[key] = {__tdxType: value};
        } else {
          // Assume a 'mixed' mongoose type.
          schema[key] = [];
        }
      } else if (typeof value === "object") {
        // Recurse for sub-documents
        schema[key] = schemaToTDX(vocab, value, errList);
      } else if (typeof value === "string") {
        // An implied type spec, e.g. {name: "string"} - convert to TDX
        schema[key] = {__tdxType: validateTDXType(vocab, value, errList)};
      } else {
        errList.push(`invalid schema definition, unexpected: ${schema}`);
      }
    });

    return schema;
  } else if (typeof schema === "string") {
    return {__tdxType: validateTDXType(vocab, schema, errList)};
  } else {
    errList.push(`invalid schema definition, unexpected: ${schema}`);
  }
};

const validateMongooseType = function(vocab, type, errList) {
  let properType;
  type = vocabTypeLookupMongoose(vocab, type) || type;
  type = type.toLowerCase();
  if (!constants.mongooseTypes[type]) {
    errList.push(`invalid base type: ${type}`);
  } else {
    properType = _.capitalize(type);
  }
  return properType;
};

// Converts a schema from TDX to mongoose format.
const schemaToMongoose = function(vocab, schema, errList, forDisplay) {
  errList = errList || [];

  _.each(schema, function(v, k) {
    if (reservedFieldNames.indexOf(k) >= 0) {
      errLog("invalid field name (reserved): %s", k);
      errList.push(`invalid field name (reserved): ${k}`);
    } else if (k === "__tdxRequired") {
      schema.required = schema.__tdxRequired;
      delete schema.__tdxRequired;
    } else if (k === "__tdxDefault") {
      schema.default = schema.__tdxDefault;
      delete schema.__tdxDefault;
    } else if (k === "__tdxDescription") {
      if (forDisplay) {
        // Include the description if for display
        schema.description = schema.__tdxDescription;
      }
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
          schema.type = validateMongooseType(vocab, schema.type, errList);
        }
      }
    } else if (Array.isArray(v)) {
      // Array
      if (v.length > 1) {
        errList.push(`invalid array type specification for key: ${k}`);
      } else if (v.length > 0) {
        if (typeof v[0] === "string") {
          // Array of single type.
          schema[k] = [{type: validateMongooseType(vocab, v[0], errList)}];
        } else {
          // Array of sub-document spec.
          schema[k] = [schemaToMongoose(vocab, v[0], errList, forDisplay)];
        }
      }
    } else if (typeof v === "object") {
      // Sub-document
      schema[k] = schemaToMongoose(vocab, v, errList, forDisplay);
    } else if (typeof v !== "string") {
      // TODO - review
      // Don't treat this as an error, just ignore.
      // Seems to be caused be some legacy schema definitions with { default: true, required: true } etc.
      // errList.push("invalid schema definition - unexpected type for key '" + k + "': " + (typeof v));
      errLog(`invalid schema definition - unexpected type for key '${k}' : ${(typeof v)}`);
      delete schema[k];
    } else {
      schema[k] = {type: validateMongooseType(vocab, v, errList)};
    }
  });

  return schema;
};

const definitionToMongoose = function(name, tdxSchema) {
  const uniqueIndex = tdxSchema.uniqueIndex;
  const indexes = tdxSchema.nonUniqueIndexes;

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
  //
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
  const nonUniqueIndexes = [];
  _.forEach(indexes, function(nonUniqueIndex) {
    if (nonUniqueIndex.length > 0) {
      nonUniqueIndexes.push(indexToMongoose(nonUniqueIndex));
    }
  });
  log("translated non unique indexes for %s from %j to %j", name, indexes, nonUniqueIndexes);

  // Do the same for the unique index.
  // Use the 'uniqueIndex' parameter to set the PK of the schema.
  // Do this rather than use the built-in mongoose specification in order
  // to support compound indexes, where the order of fields is important.
  //
  // See comment above for index format explanation.
  const primaryIndex = indexToMongoose(uniqueIndex);
  log("translated primary index for %s from %j to %j", name, uniqueIndex, primaryIndex);

  //
  // Remove all index information from the schema, as we set the indexes
  // manually below.
  //
  log("transforming schema for %s: %j", tdxSchema.id, tdxSchema.dataSchema);
  const errList = [];
  const mongooseSchema = schemaToMongoose(null, tdxSchema.dataSchema, errList, false);
  if (errList.length) {
    throw new Error(`invalid mongoose schema: ${errList.join(",")}`);
  }

  log("schema transformed to %j", mongooseSchema);

  return {
    schema: mongooseSchema,
    uniqueIndex: primaryIndex,
    nonUniqueIndexes: nonUniqueIndexes,
  };
};

export default {
  definitionToMongoose: definitionToMongoose,
  schemaToMongoose: function(vocab, tdxSchema, errList, forDisplay) {
    return schemaToMongoose(vocab || [], _.cloneDeep(tdxSchema), errList, forDisplay);
  },
  schemaToTDX: function(vocab, mongooseSchema, errList) {
    return schemaToTDX(vocab || [], _.cloneDeep(mongooseSchema), errList);
  },
  indexToMongoose: indexToMongoose,
  indexToTDX: indexToTDX,
};
