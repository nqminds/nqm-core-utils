(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("bluebird"), require("mongo-parse"));
	else if(typeof define === 'function' && define.amd)
		define("nqm-core-utils", ["_", "bluebird", "mongo-parse"], factory);
	else if(typeof exports === 'object')
		exports["nqm-core-utils"] = factory(require("lodash"), require("bluebird"), require("mongo-parse"));
	else
		root["nqm-core-utils"] = factory(root["_"], root["bluebird"], root["mongo-parse"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  // Resource access types
  readAccess:  "r",
  writeAccess: "w",
  executeAccess: "x",

  // Share modes
  publicRWShareMode: "pw",    // public read and write
  publicROShareMode: "pr",    // public read, trusted write
  trustedShareMode:  "tr",    // trusted only

  // Event types
  resourceEventType: "Resource",
  accountEventType:  "Account",

  mongooseTypes: {
    "string": 1,
    "number": 1,
    "date": 1,
    "boolean": 1,
  },

  // Resource types (schema ids)
  rootGroupResourceType:               "rootGroup",
  schemaResourceType:                  "schema",
  datasetResourceType:                 "dataset",
  visualisationResourceType:           "visualisation",
  groupResourceType:                   "resourceGroup",
  rawFileResourceType:                 "rawFile",
  vocabularyResourceType:              "vocabulary",
  widgetVisualisationResourceType:     "widgetVisualisation",
  timeSeriesVisualisationResourceType: "timeSeriesVisualisation",
  mapVisualisationResourceType:        "mapVisualisation",
  statusVisualisationResourceType:     "statusVisualisation",
  databotBaseType:                     "databot",                   // base of all things 'databot'
  databotResourceType:                 "databotDefinition",         // a databot definition
  databotInstancesResourceType:        "databotInstances",          // system resource storing details of running databot instances
  databotInstanceOutputResourceType:   "databotInstanceOutput",     // system resource storing databot instance output
  databotProcessesResourceType:        "databotProcesses",          // system resource storing databot process info
  activeDatabotHostsResourceType:      "activeDatabotHosts",        // system resource storing details of active databot hosts
  databotHostResourceType:             "databotHost",               // system resources that mirror hostAccountType accounts to enable sharing
  databotGroupResourceType:            "databotGroup",
  databotHostGroupResourceType:        "databotHostGroup",
  databotControllerResourceType:       "databotController",
  datasetFilterResourceType:           "datasetFilter",
  applicationBaseType:                 "applicationBase",
  applicationResourceType:             "application",
  applicationGroupResourceType:        "applicationGroup",
  applicationDataGroupResourceType:    "applicationDataGroup",
  scratchGroupResourceType:            "scratchGroup",
  rootResourceGroupResourceType:       "rootResourceGroup",
  geojsonResourceType:                 "geojson",

  // Account types
  userAccountType:  "user",
  tokenAccountType: "token",
  hostAccountType: "host",
  applicationAccountType: "application",

  // Default schema resource
  schemasResourceId: "__schemas__",

  // Default vocabulary resource
  vocabularyResourceId: "__vocab__",

  // Databot stuff.
  npmDatabotType: "npm",
  inlineDatabotType: "script",
  zipDatabotType: "zip",
  githubDatabotType: "github",
  urlDatabotType: "url",

  browserHostType: "browser",
  serverHostType:  "server",

  databotInstancesResourceId:      "__databotInstances__",
  databotInstanceOutputResourceId: "__databotInstanceOutput__",
  databotProcessesResourceId:      "__databotProcesses__",
  activeDatabotHostsResourceId:    "__activeDatabotHosts__",

  unallocatedDatabotStatus: "unallocated",
  pendingDatabotStatus:     "pending",
  installingDatabotStatus:  "installing",
  partRunningDatabotStatus: "partRunning",
  runningDatabotStatus:     "running",
  pausedDatabotStatus:      "paused",
  stoppingDatabotStatus:    "stopping",
  completeDatabotStatus:    "complete",
  errorDatabotStatus:       "error",

  immediateDatabotInstanceRunMode: "run-now",
  alwaysDatabotInstanceRunMode:    "run-always",
  scheduledDatabotInstanceRunMode: "scheduled",

  // Privileged databots
  datasetImportDatabot:     "__datasetImport__",
  datasetCopyDatabot:       "__datasetCopy__",

  onlineHostStatus:  "online",
  offlineHostStatus: "offline",
  idleHostStatus:    "idle",
  busyHostStatus:    "busy",
  errorHostStatus:   "error",

  resourceVocabularyId:          "ResourceId",
  datasetVocabularyId:           "DatasetId",
  folderVocabularyId:            "FolderId",
  rawFileVocabularyId:           "RawFileId",
  visualisationVocabularyId:     "VisualisationId",
  schemaVocabularyId:            "SchemaId",
  databotDefinitionVocabularyId: "DatabotDefinitionId",
  urlVocabularyId:               "Url",

  // Index status
  builtIndexStatus:      "built",
  pendingIndexStatus:    "pending",
  suspendingIndexStatus: "suspending",
  suspendedIndexStatus:  "suspended",
  errorIndexStatus:      "error",

  // Authentication services
  googleAuthService:     "oauth:google",
  localAuthService:      "local",

  // Misc
  guestAccount: "...guest...",
  maxTimestamp: 8640000000000000,
  datasetStorePrefix: "dataset.",

  // Special folders
  rootFolderPrefix: "r.",
  rootFolderName: "root",

  scratchFolderPrefix: "s.",
  scratchFolderName: "scratch",
  scratchFolderAlias: "__scratch__",      // Used in code to refer to the current users scratch folder.

  resourceFolderPrefix: "rs.",
  resourceFolderName: "resources",

  applicationFolderPrefix: "a.",
  applicationFolderName: "applications",

  applicationDataFolderPrefix: "ad.",
  applicationDataFolderName: "application data",

  databotFolderPrefix: "db.",
  databotFolderName: "databots",

  databotHostFolderPrefix: "dh.",
  databotHostFolderName: "databot hosts",

  identityFilterPlaceholder: "@@_identity_@@",
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function() {
  var exLog = console.log;
  console.log = function(msg) {
    // TODO - check for 'debug enabled' flag.
    exLog.apply(this, arguments);
  }
})();

/* harmony default export */ __webpack_exports__["a"] = (console.log);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debug__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongo_parse__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongo_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongo_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




/*
  * Extract a dictionary of values from params corresponding to the given array of field paths,
  * where paths use the dot notation, e.g. address.postcode.
  */
const buildDataKey = function(fieldPaths, params) {
  const keys = {};
  __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forEach(fieldPaths, function(f) {
    // Get the field path.
    const key = f.asc || f.desc;
    const pointers = __WEBPACK_IMPORTED_MODULE_1_mongo_parse___default.a.DotNotationPointers(params, key);
    if (pointers.length === 0 || typeof pointers[0].val === "undefined") {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__debug__["a" /* default */])("no key data for field '%s' in %j", key, params);
    } else {
      keys[key] = pointers[0].val;
    }
  });

  return keys;
}

/* harmony default export */ __webpack_exports__["a"] = (buildDataKey);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


const isDatabotInstanceRunning = function(databotInstance) {
  return databotInstance && (
    databotInstance.status === __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].runningDatabotStatus || 
    databotInstance.status === __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].installingDatabotStatus || 
    databotInstance.status === __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].partRunningDatabotStatus ||
    databotInstance.status === __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].pausedDatabotStatus
  );
};

/* harmony default export */ __webpack_exports__["a"] = ({
  isDatabotInstanceRunning: isDatabotInstanceRunning
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const flattenJSON = function(data) {
  const result = {};
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      const l = cur.length;
      for(var i = 0; i < l; i++) {
        recurse(cur[i], prop + "." + i);
      }
      if (l === 0)
        result[prop] = [];
    } else {
      let isEmpty = true;
      for (let p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop+"."+p : p);
      }
      if (isEmpty && prop)
        result[prop] = {};
    }
  }
  recurse(data, "");
  return result;
};
  
/* harmony default export */ __webpack_exports__["a"] = (flattenJSON);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


const isResourceType = function(resource, type) {
  return (
    resource.schemaDefinition ?
    (resource.schemaDefinition.id === type || (resource.schemaDefinition.basedOn && resource.schemaDefinition.basedOn.indexOf(type) >= 0)) :
    resource.baseType === type
  );
};

const getResourceTypeText = function(type) {
  let text;
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].groupResourceType:
      text = "folder";
      break;
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].rawFileResourceType:
      text = "raw file";
      break;
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].widgetVisualisationResourceType:
      text = "widget visualisation";
      break;
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].timeSeriesVisualisationResourceType:
      text = "time series visualisation";
      break;
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].mapVisualisationResourceType:
      text = "map visualisation";
      break;
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].statusVisualisationResourceType:
      text = "status visualisation";
      break;
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].scheduledTasksResourceType:
      text = "scheduled tasks";
      break;
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].processHostsResourceType:
      text = "process hosts";
      break;
    default:
      // Most single word resource types are OK.
      text = type;
      break;        
  }
  return text;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  isResourceType: isResourceType,
  getResourceTypeText: getResourceTypeText
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debug__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(0);






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
  "_posts"
];

// Convert from simple array list to TDX index format.
// Assume ascending sort direction.
// e.g. ["id", "code"] => [{asc: "id"}, {asc: "code"}]
//
// Will also convert from mongoose index spec to tdx format.
// e.g. {id: 1, code: -1} => [{asc: "id"}, {desc: "code"}]
//
const indexToTDX = function(indexFields, errList) {
  const tdxIndex = [];

  if (Array.isArray(indexFields)) {
    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(indexFields, function(fieldSpec, idx) {
      if (typeof fieldSpec === "string") {
        tdxIndex.push({"asc": fieldSpec});
      } else if (fieldSpec.asc || fieldSpec.desc) {
        tdxIndex.push(fieldSpec);
      } else {
        errList.push("invalid index spec: " + JSON.stringify(fieldSpec));          
      }
    });
  } else if (typeof indexFields === "object") {
    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(indexFields, function(sortDirection, key) {
      if (sortDirection === -1) {
        tdxIndex.push({desc: key});
      } else {
        tdxIndex.push({asc: key});
      }
    });
  }

  return tdxIndex;
};

const validateTDXType = function(type, errList) {
  let properType;
  type = type.toLowerCase();
  if (!__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* default */].mongooseTypes[type]) {
    errList.push("invalid base type: " + type);
  } else {
    properType = type;
  }
  return properType;
};

// Converts a schema from mongoose to TDX format.
const schemaToTDX = function(schema, errList) {
  if (typeof schema === "object") {    
    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(schema, function(value, key) {
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

const validateMongooseType = function(type, errList) {
  let properType;
  type = type.toLowerCase();
  if (!__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* default */].mongooseTypes[type]) {
    errList.push("invalid base type: " + type);
  } else {
    properType = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.capitalize(type);
  }
  return properType;
};

const schemaToMongoose = function(schema, errList) {
  errList = errList || [];

  __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(schema, function(v, k) {
    if (reservedFieldNames.indexOf(k) >= 0) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__debug__["a" /* default */])("invalid field name (reserved): %s", k);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__debug__["a" /* default */])("unexpected __tdxType value: %j", v);
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
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__debug__["a" /* default */])("invalid schema definition - unexpected type for key '" + k + "': " + (typeof v));
      delete schema[k];
    } else {
      schema[k] = {type: validateMongooseType(v, errList)};
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
  const nonUniqueIndexes = [];
  __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(indexes, function(nonUniqueIndex) {
    if (nonUniqueIndex.length > 0) {
      const index = {};
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(nonUniqueIndex, function(i) {
        index[i.asc || i.desc] = (i.asc ? 1 : -1);
      });
      nonUniqueIndexes.push(index);        
    }
  });
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__debug__["a" /* default */])("translated non unique indexes for %s from %j to %j", name, indexes, nonUniqueIndexes);

  // Do the same for the unique index.
  // Use the 'uniqueIndex' parameter to set the PK of the schema.
  // Do this rather than use the built-in mongoose specification in order
  // to support compound indexes, where the order of fields is important.
  //
  // See comment above for index format explanation.
  const primaryIndex = {};
  __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(uniqueIndex, function(i) {
    primaryIndex[i.asc || i.desc] = (i.asc ? 1 : -1);
  });
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__debug__["a" /* default */])("translated primary index for %s from %j to %j", name, uniqueIndex, primaryIndex);
      
  //
  // Remove all index information from the schema, as we set the indexes
  // manually below.
  //        
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__debug__["a" /* default */])("transforming schema for %s: %j", tdxSchema.id, tdxSchema.dataSchema);
  const errList = [];
  const mongooseSchema = schemaToMongoose(tdxSchema.dataSchema, errList);
  if (errList.length) {
    throw new Error("invalid mongoose schema: " + errList.join(","));
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__debug__["a" /* default */])("schema transformed to %j", mongooseSchema);

  return {
    schema: mongooseSchema,
    uniqueIndex: primaryIndex,
    nonUniqueIndexes: nonUniqueIndexes
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  definitionToMongoose: definitionToMongoose,
  schemaToMongoose: function(tdxSchema, errList) {
    return schemaToMongoose(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(tdxSchema), errList);
  },
  schemaToTDX: function(mongooseSchema, errList) {
    return schemaToTDX(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(mongooseSchema), errList);
  },
  indexToTDX: indexToTDX
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/*
	shorthash
	(c) 2013 Bibig
	
	https://github.com/bibig/node-shorthash
	shorthash may be freely distributed under the MIT license.
*/

// refer to: http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function bitwise(str){
	var hash = 0;
	if (str.length == 0) return hash;
	for (var i = 0; i < str.length; i++) {
		var ch = str.charCodeAt(i);
		hash = ((hash<<5)-hash) + ch;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}

// 10进制转化成62进制以内的进制
// convert 10 binary to customized binary, max is 62
function binaryTransfer(integer, binary) {
	binary = binary || 62;
	var stack = [];
	var num;
	var result = '';
	var sign = integer < 0 ? '-' : '';
	
	function table (num) {
		var t = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return t[num];
	}
	
	integer = Math.abs(integer);
	
	while (integer >= binary) {
		num = integer % binary;
		integer = Math.floor(integer / binary);
		stack.push(table(num));
	}
	
	if (integer > 0) {
		stack.push(table(integer));
	}
	
	for (var i = stack.length - 1; i >= 0; i--) {
		result += stack[i];
	} 
	
	return sign + result;
}


/**
 * why choose 61 binary, because we need the last element char to replace the minus sign
 * eg: -aGtzd will be ZaGtzd
 */
function unique (text) {
	var id = binaryTransfer(bitwise(text), 61);
	return id.replace('-', 'Z');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bitwise,
  binaryTransfer,
  unique
});




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmailValid", function() { return isEmailValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return isDateValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHostNameValid", function() { return isHostNameValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTDXAccount", function() { return makeTDXAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitTDXAccount", function() { return splitTDXAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFunction", function() { return parseFunction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__databot_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema_utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flatten__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_data_key__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__short_hash__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "resourceUtils", function() { return __WEBPACK_IMPORTED_MODULE_1__resource_utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "databotUtils", function() { return __WEBPACK_IMPORTED_MODULE_2__databot_utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemaUtils", function() { return __WEBPACK_IMPORTED_MODULE_3__schema_utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flattenJSON", function() { return __WEBPACK_IMPORTED_MODULE_4__flatten__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buildDataKey", function() { return __WEBPACK_IMPORTED_MODULE_5__build_data_key__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shortHash", function() { return __WEBPACK_IMPORTED_MODULE_6__short_hash__["a"]; });








const isEmailValid = function(address) { 
  // TODO - improve this (use mailgun?)
  return /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(address);
};

const isHostNameValid = function(hostname) {
  // From http://stackoverflow.com/a/106223
  return /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(hostname);
};

const isDateValid = function(d) {
  // From http://stackoverflow.com/q/1353684 
  if (Object.prototype.toString.call(d) !== "[object Date]")
    return false;
  return !isNaN(d.getTime());
}

const isNumeric = function (n) { return !isNaN(parseFloat(n)) && isFinite(n); };

const makeTDXAccount = function(email, tdx) {
  /*
    * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
    */
  return email + "/" + tdx;
};

const splitTDXAccount = function(username) {
  /*
    * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
    */
  let result;
  const split = username.toLowerCase().split("/");
  if (split.length === 2 && isEmailValid(split[0]) && (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0)) {
    result = {
      email: split[0],
      tdx: split[1]
    };
  }
  return result;
};

const parseFunction = function(funcText) {
  const funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
  const match = funcReg.exec(funcText.replace(/\n/g, " "));

  if (match) {
    return new Function(match[1].split(","), match[2]);
  }

  return null;
};
  



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=nqm-core-utils.js.map