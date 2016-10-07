module.exports = (function() {

  var log = require("debug")("nqm-utils:schema-utils");
  var errLog = require("debug")("nqm-utils:schema-utils:error");
  var Promise = require("bluebird");
  var _ = require("lodash");
    
  var schemaToMongoose = function(schema) {
    _.each(schema, function(v,k) {
      if (k === "__tdxType") {
        if (!v) {
          errLog("unexpected __tdxType value: %j",v);
          process.exit();
        }
        v = [].concat(v);
        delete schema.__tdxType;
        // The base type should be a valid mongoose type
        schema.type = _.capitalize(v[0].split(".")[0]);
      } else if (Array.isArray(v)) {
        if (v.length > 0) {
          var subDoc = schemaToMongoose(v[0]);
          // Prevent object sub-documents from being assigned an _id property.
          if (!subDoc.type || typeof subDoc.type !== "string") {
            subDoc._id = false;
          }
          schema[k] = [subDoc];
        }
      } else if (typeof v === "object") {
        schema[k] = schemaToMongoose(v);
      } else if (typeof v === "string") {
        schema[k] = v;
      } else {
        errLog("invalid schema: %s - %j", k, v);
      }
    });  
    
    return schema;
  };

  function convertToMongoose(name, tdxSchema) {
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
    var cloned = _.cloneDeep(tdxSchema.dataSchema);
    var mongooseSchema = schemaToMongoose(cloned);

    log("schema transformed from %j to %j", cloned, mongooseSchema);

    return {
      schema: mongooseSchema,
      uniqueIndex: primaryIndex,
      nonUniqueIndexes: nonUniqueIndexes
    };
  }

  return {
    convertToMongoose: convertToMongoose
  }
}());