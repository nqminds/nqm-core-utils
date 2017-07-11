(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("debug"), require("shortid"), require("mongo-parse"));
	else if(typeof define === 'function' && define.amd)
		define("nqm-core-utils", ["_", "debug", "shortid", "mongo-parse"], factory);
	else if(typeof exports === 'object')
		exports["nqm-core-utils"] = factory(require("lodash"), require("debug"), require("shortid"), require("mongo-parse"));
	else
		root["nqm-core-utils"] = factory(root["_"], root["debug"], root["shortid"], root["mongo-parse"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable key-spacing, max-len */
exports.default = {
  // Resource access types
  readAccess: "r",
  writeAccess: "w",

  // Share modes
  publicRWShareMode: "pw", // public read and write
  publicROShareMode: "pr", // public read, trusted write
  trustedShareMode: "tr", // trusted only

  // Event types
  resourceEventType: "Resource",
  accountEventType: "Account",

  mongooseTypes: {
    "string": 1,
    "number": 1,
    "date": 1,
    "boolean": 1
  },

  // Resource types (schema ids)
  vocabularyResourceType: "vocabulary",
  schemaResourceType: "schema",
  datasetResourceType: "dataset",
  visualisationResourceType: "visualisation",
  groupResourceType: "resourceGroup", // generic folder
  rootGroupResourceType: "rootGroup", // user root folder - holds all account resources
  rawFileResourceType: "rawFile",
  applicationBaseType: "applicationBase",
  applicationDefinitionResourceType: "applicationDefinition", // system resources that mirror applicationAccountType accounts to enable sharing
  databotBaseType: "databot", // base of all things 'databot'
  databotDefinitionResourceType: "databotDefinition", // a databot definition
  databotHostResourceType: "databotHost", // system resources that mirror hostAccountType accounts to enable sharing

  resourceRootGroupResourceType: "resourceRootGroup", // folder for all 'pure' resources (non-databot or application)
  scratchGroupResourceType: "scratchGroup",
  datasetFilterResourceType: "datasetFilter",
  geojsonResourceType: "geojson",

  widgetVisualisationResourceType: "widgetVisualisation",
  timeSeriesVisualisationResourceType: "timeSeriesVisualisation",
  mapVisualisationResourceType: "mapVisualisation",
  statusVisualisationResourceType: "statusVisualisation",

  databotRootGroupResourceType: "databotRootGroup",
  databotDefinitionGroupResourceType: "databotGroup",
  databotHostGroupResourceType: "databotHostGroup",
  databotInstanceGroupResourceType: "databotInstanceGroup",
  databotControllerResourceType: "databotController",

  applicationRootGroupResourceType: "applicationRootGroup",
  applicationDefinitionGroupResourceType: "applicationDefinitionGroup",
  applicationServerGroupResourceType: "applicationServerGroup",
  applicationDataGroupResourceType: "applicationDataGroup",

  // databot management resources
  databotInstancesResourceType: "databotInstances", // system resource storing details of running databot instances
  databotInstanceOutputResourceType: "databotInstanceOutput", // system resource storing databot instance output
  databotProcessesResourceType: "databotProcesses", // system resource storing databot process info
  activeDatabotHostsResourceType: "activeDatabotHosts", // system resource storing details of active databot hosts

  // Account types
  userAccountType: "user",
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
  serverHostType: "server",

  databotInstancesResourceId: "__databotInstances__",
  databotInstanceOutputResourceId: "__databotInstanceOutput__",
  databotProcessesResourceId: "__databotProcesses__",
  activeDatabotHostsResourceId: "__activeDatabotHosts__",

  unallocatedDatabotStatus: "unallocated",
  pendingDatabotStatus: "pending",
  installingDatabotStatus: "installing",
  partRunningDatabotStatus: "partRunning",
  runningDatabotStatus: "running",
  pausedDatabotStatus: "paused",
  stoppingDatabotStatus: "stopping",
  completeDatabotStatus: "complete",
  errorDatabotStatus: "error",

  immediateDatabotInstanceRunMode: "run-now",
  alwaysDatabotInstanceRunMode: "run-always",
  scheduledDatabotInstanceRunMode: "scheduled",

  // Privileged databots
  datasetImportDatabot: "__datasetImport__",
  datasetCopyDatabot: "__datasetCopy__",

  onlineHostStatus: "online",
  offlineHostStatus: "offline",
  idleHostStatus: "idle",
  busyHostStatus: "busy",
  errorHostStatus: "error",

  resourceVocabularyId: "ResourceId",
  datasetVocabularyId: "DatasetId",
  folderVocabularyId: "FolderId",
  rawFileVocabularyId: "RawFileId",
  visualisationVocabularyId: "VisualisationId",
  schemaVocabularyId: "SchemaId",
  databotDefinitionVocabularyId: "DatabotDefinitionId",
  urlVocabularyId: "Url",

  // Index status
  builtIndexStatus: "built",
  pendingIndexStatus: "pending",
  suspendingIndexStatus: "suspending",
  suspendedIndexStatus: "suspended",
  errorIndexStatus: "error",

  // Authentication services
  googleAuthService: "oauth:google",
  localAuthService: "local",

  // Misc
  guestAccount: "...guest...",
  maxTimestamp: 8640000000000000,
  datasetStorePrefix: "dataset.",

  // Special folders
  rootFolderPrefix: "r.",
  rootFolderName: "root",

  scratchFolderPrefix: "s.",
  scratchFolderName: "scratch",
  scratchFolderAlias: "__scratch__", // Used in code to refer to the current users scratch folder.

  resourceRootFolderPrefix: "rs.",
  resourceRootFolderName: "resources",

  applicationRootFolderPrefix: "a.",
  applicationRootFolderName: "applications",

  applicationDefinitionFolderPrefix: "adef.",
  applicationDefinitionFolderName: "application definitions",

  applicationServerFolderPrefix: "as.",
  applicationServerFolderName: "application servers",

  applicationDataFolderPrefix: "ad.",
  applicationDataFolderName: "application data",

  // For application-specific folders where app servers can store data.
  // Created as sub-folders of applicationServerFolderPrefix.
  // Will use the application name, e.g. "careshare server data".
  applicationServerDataFolderPrefix: "adat.",

  databotRootFolderPrefix: "dbr.",
  databotRootFolderName: "databots",

  databotDefinitionFolderPrefix: "db.",
  databotDefinitionFolderName: "databot definitions",

  databotHostFolderPrefix: "dh.",
  databotHostFolderName: "databot hosts",

  databotInstanceFolderPrefix: "dbi.",
  databotInstanceFolderName: "databot instances",

  // Application data ownership modes
  userOwnershipMode: "user",
  appOwnershipMode: "application",

  // Application data access modes
  impersonateAccessMode: "impersonate",
  shareAccessMode: "shared",

  // Identity filter placeholder
  identityFilterPlaceholder: "@@_identity_@@",

  // Application ids
  authenticateApplicationId: "__authenticate__",
  toolboxApplicationId: "__toolbox__"
};
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* eslint-disable */
/*
	shorthash
	(c) 2013 Bibig
	
	https://github.com/bibig/node-shorthash
	shorthash may be freely distributed under the MIT license.
*/

// refer to: http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function bitwise(str) {
	var hash = 0;
	if (str.length == 0) return hash;
	for (var i = 0; i < str.length; i++) {
		var ch = str.charCodeAt(i);
		hash = (hash << 5) - hash + ch;
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

	function table(num) {
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
function unique(text) {
	var id = binaryTransfer(bitwise(text), 61);
	return id.replace('-', 'Z');
}

exports.default = {
	bitwise: bitwise,
	binaryTransfer: binaryTransfer,
	unique: unique
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__(3);

var _debug2 = _interopRequireDefault(_debug);

var _mongoParse = __webpack_require__(11);

var _mongoParse2 = _interopRequireDefault(_mongoParse);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errLog = (0, _debug2.default)("nqm-core-utils:build-data-key");

/*
  * Extract a dictionary of values from params corresponding to the given array of field paths,
  * where paths use the dot notation, e.g. address.postcode.
  */
var buildDataKey = function buildDataKey(fieldPaths, params, failIfIncomplete) {
  var keys = {};
  _lodash2.default.forEach(fieldPaths, function (f) {
    // Get the field path.
    var key = f.asc || f.desc;
    var pointers = _mongoParse2.default.DotNotationPointers(params, key);
    if (pointers.length === 0 || typeof pointers[0].val === "undefined") {
      errLog("no key data for field '%s' in %j", key, params);
      if (failIfIncomplete) {
        throw new Error("buildDataKey - incomplete primary key: no data for '" + key + "' in " + JSON.stringify(params));
      }
    } else {
      keys[key] = pointers[0].val;
    }
  });

  return keys;
};

exports.default = buildDataKey;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDatabotInstanceRunning = function isDatabotInstanceRunning(databotInstance) {
  return databotInstance && (databotInstance.status === _constants2.default.runningDatabotStatus || databotInstance.status === _constants2.default.installingDatabotStatus || databotInstance.status === _constants2.default.partRunningDatabotStatus || databotInstance.status === _constants2.default.pausedDatabotStatus);
};

exports.default = {
  isDatabotInstanceRunning: isDatabotInstanceRunning
};
module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var flattenJSON = function flattenJSON(data) {
  var result = {};
  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      var l = cur.length;
      for (var i = 0; i < l; i++) {
        recurse(cur[i], prop + "." + i);
      }
      if (l === 0) result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + "." + p : p);
      }
      if (isEmpty && prop) result[prop] = {};
    }
  }
  recurse(data, "");
  return result;
};

exports.default = flattenJSON;
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _shortHash = __webpack_require__(2);

var _shortHash2 = _interopRequireDefault(_shortHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A 'pure' resource is any non-databot and non-application resource.
var pureResourceTypes = [_constants2.default.datasetResourceType, _constants2.default.groupResourceType, _constants2.default.rawFileResourceType];

var isResourceType = function isResourceType(resource, type) {
  resource = resource || {};
  return resource.schemaDefinition ? resource.schemaDefinition.id === type || resource.schemaDefinition.basedOn && resource.schemaDefinition.basedOn.indexOf(type) >= 0 : // eslint-disable-line max-len
  resource.baseType === type;
};

var getResourceTypeText = function getResourceTypeText(type) {
  var text = void 0;
  switch (type) {
    case _constants2.default.groupResourceType:
      text = "folder";
      break;
    case _constants2.default.rawFileResourceType:
      text = "raw file";
      break;
    case _constants2.default.widgetVisualisationResourceType:
      text = "widget visualisation";
      break;
    case _constants2.default.timeSeriesVisualisationResourceType:
      text = "time series visualisation";
      break;
    case _constants2.default.mapVisualisationResourceType:
      text = "map visualisation";
      break;
    case _constants2.default.statusVisualisationResourceType:
      text = "status visualisation";
      break;
    case _constants2.default.scheduledTasksResourceType:
      text = "scheduled tasks";
      break;
    case _constants2.default.processHostsResourceType:
      text = "process hosts";
      break;
    default:
      // Most single word resource types are OK.
      text = type;
      break;
  }
  return text;
};

var getShareModeText = function getShareModeText(shareMode) {
  var display = void 0;
  switch (shareMode) {
    case _constants2.default.publicRWShareMode:
      display = "public view and edit";
      break;
    case _constants2.default.publicROShareMode:
      display = "public view, trusted edit";
      break;
    case _constants2.default.trustedShareMode:
      display = "trusted only";
      break;
    default:
      display = "!!unknown!!";
      break;
  }
  return display;
};

var primaryKeyFromFlattened = function primaryKeyFromFlattened(resource, datum) {
  // Create primary key from flattened data.
  var key = {};
  _lodash2.default.forEach(resource.schemaDefinition.uniqueIndex, function (idx) {
    var keyField = idx.asc || idx.desc;
    key[keyField] = datum[keyField];
  });

  return key;
};

// Users root folder.
var getAccountRootId = function getAccountRootId(accountId) {
  return specialFolderId(_constants2.default.rootFolderPrefix, accountId);
};

// Folder containing all 'pure' resources belonging to the user.
var getResourceRootId = function getResourceRootId(accountId) {
  return specialFolderId(_constants2.default.resourceRootFolderPrefix, accountId);
};

// Folder containing all application-specific data for the user.
var getApplicationRootId = function getApplicationRootId(accountId) {
  return specialFolderId(_constants2.default.applicationRootFolderPrefix, accountId);
};

// Folder containing application definitions created by the user.
var getApplicationDefinitionId = function getApplicationDefinitionId(accountId) {
  return specialFolderId(_constants2.default.applicationDefinitionFolderPrefix, accountId);
};

// Folder containing a users application data.
var getApplicationDataId = function getApplicationDataId(accountId) {
  return specialFolderId(_constants2.default.applicationDataFolderPrefix, accountId);
};

// Folder containing all databot-specific data for the user.
var getDatabotRootId = function getDatabotRootId(accountId) {
  return specialFolderId(_constants2.default.databotRootFolderPrefix, accountId);
};

//
// Gets the default parent for a given resource type.
// This is used when a resource is created with no parent specified.
//
var getDefaultResourceParent = function getDefaultResourceParent(accountId, baseType) {
  var rootId = void 0;
  switch (baseType) {
    case _constants2.default.datasetResourceType:
      rootId = getResourceRootId(accountId);
      break;
    case _constants2.default.applicationBaseType:
      rootId = getApplicationRootId(accountId);
      break;
    case _constants2.default.databotBaseType:
      rootId = getDatabotRootId(accountId);
      break;
    default:
      // Do nothing
      break;
  }
  return rootId;
};

var isPureResource = function isPureResource(baseType) {
  return pureResourceTypes.indexOf(baseType) >= 0;
};

var specialFolderId = function specialFolderId(prefix, accountId) {
  return _shortHash2.default.unique(prefix + accountId);
};

exports.default = {
  getAccountRootId: getAccountRootId,
  getApplicationRootId: getApplicationRootId,
  getDatabotRootId: getDatabotRootId,
  getApplicationDataId: getApplicationDataId,
  getApplicationDefinitionId: getApplicationDefinitionId,
  getDefaultResourceParent: getDefaultResourceParent,
  getResourceRootId: getResourceRootId,
  getResourceTypeText: getResourceTypeText,
  getShareModeText: getShareModeText,
  isPureResource: isPureResource,
  isResourceType: isResourceType,
  primaryKeyFromFlattened: primaryKeyFromFlattened,
  specialFolderId: specialFolderId
};
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-underscore-dangle */


var _debug = __webpack_require__(3);

var _debug2 = _interopRequireDefault(_debug);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)("nqm-core-utils:build-data-key");
var errLog = (0, _debug2.default)("nqm-core-utils:build-data-key:error");

// From mongoose/lib/schema.js
var reservedFieldNames = ["_id", // <---- TDX specific
"prototype",
// EventEmitter
"emit", "on", "once", "listeners", "removeListener",
// document properties and functions
"collection", "db", "errors", "init", "isModified", "isNew", "get", "modelName", "save", "schema", "set", "toObject", "validate", "remove",
// hooks.js
"_pres", "_posts"];

// Convert from simple array list to TDX index format.
// Assume ascending sort direction.
// e.g. ["id", "code"] => [{asc: "id"}, {asc: "code"}]
//
// Will also convert from mongoose index spec to tdx format.
// e.g. {id: 1, code: -1} => [{asc: "id"}, {desc: "code"}]
//
var indexToTDX = function indexToTDX(indexFields, errList) {
  var tdxIndex = [];

  if (Array.isArray(indexFields)) {
    _lodash2.default.forEach(indexFields, function (fieldSpec) {
      if (typeof fieldSpec === "string") {
        tdxIndex.push({ "asc": fieldSpec });
      } else if (fieldSpec.asc || fieldSpec.desc) {
        tdxIndex.push(fieldSpec);
      } else {
        errList.push("invalid index spec: " + JSON.stringify(fieldSpec));
      }
    });
  } else if ((typeof indexFields === "undefined" ? "undefined" : _typeof(indexFields)) === "object") {
    _lodash2.default.forEach(indexFields, function (sortDirection, key) {
      if (sortDirection === -1) {
        tdxIndex.push({ desc: key });
      } else {
        tdxIndex.push({ asc: key });
      }
    });
  }

  return tdxIndex;
};

var validateTDXType = function validateTDXType(type, errList) {
  var properType = void 0;
  type = type.toLowerCase();
  if (!_constants2.default.mongooseTypes[type]) {
    errList.push("invalid base type: " + type);
  } else {
    properType = type;
  }
  return properType;
};

// Converts a schema from mongoose to TDX format.
var _schemaToTDX = function _schemaToTDX(schema, errList) {
  if ((typeof schema === "undefined" ? "undefined" : _typeof(schema)) === "object") {
    _lodash2.default.forEach(schema, function (value, key) {
      if (key === "__tdxType") {
        // Ensure array type list.
        schema[key] = [].concat(value);
      } else if (key === "__tdxRequired" || key === "__tdxDefault" || key === "__tdxDescription") {
        // Do nothing.
      } else if (Array.isArray(value)) {
        if (value.length === 1) {
          value[0] = _schemaToTDX(value[0], errList);
        } else {
          // Assume a 'mixed' mongoose type.
          schema[key] = [];
        }
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
        // Recurse for sub-documents
        schema[key] = _schemaToTDX(value, errList);
      } else if (key === "type" && typeof value === "string") {
        // A mongoose-style {type: "String"} specification.
        // Convert to TDX format.
        schema.__tdxType = [validateTDXType(value, errList)];
        delete schema.type;
      } else if (typeof value === "string") {
        schema[key] = { __tdxType: [validateTDXType(value, errList)] };
      } else {
        errList.push("invalid schema definition, unexpected: " + schema);
      }
    });

    return schema;
  } else if (typeof schema === "string") {
    return { __tdxType: [validateTDXType(schema, errList)] };
  } else {
    errList.push("invalid schema definition, unexpected: " + schema);
  }
};

var validateMongooseType = function validateMongooseType(type, errList) {
  var properType = void 0;
  type = type.toLowerCase();
  if (!_constants2.default.mongooseTypes[type]) {
    errList.push("invalid base type: " + type);
  } else {
    properType = _lodash2.default.capitalize(type);
  }
  return properType;
};

var _schemaToMongoose = function _schemaToMongoose(schema, errList, forDisplay) {
  errList = errList || [];

  _lodash2.default.each(schema, function (v, k) {
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
          schema.type = validateMongooseType(schema.type, errList);
        }
      }
    } else if (Array.isArray(v)) {
      // Array
      if (v.length > 1) {
        errList.push("invalid array type specification for key: " + k);
      } else if (v.length > 0) {
        if (typeof v[0] === "string") {
          schema[k] = [{ type: validateMongooseType(v[0], errList) }];
        } else {
          schema[k] = [_schemaToMongoose(v[0], errList, forDisplay)];
        }
      }
    } else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
      // Sub-document
      schema[k] = _schemaToMongoose(v, errList, forDisplay);
    } else if (typeof v !== "string") {
      // TODO - review
      // Don't treat this as an error, just ignore.
      // Seems to be caused be some legacy schema definitions with { default: true, required: true } etc.
      // errList.push("invalid schema definition - unexpected type for key '" + k + "': " + (typeof v));
      errLog("invalid schema definition - unexpected type for key '" + k + "' : " + (typeof v === "undefined" ? "undefined" : _typeof(v)));
      delete schema[k];
    } else {
      schema[k] = { type: validateMongooseType(v, errList) };
    }
  });

  return schema;
};

var definitionToMongoose = function definitionToMongoose(name, tdxSchema) {
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
  _lodash2.default.forEach(indexes, function (nonUniqueIndex) {
    if (nonUniqueIndex.length > 0) {
      var index = {};
      _lodash2.default.forEach(nonUniqueIndex, function (i) {
        index[i.asc || i.desc] = i.asc ? 1 : -1;
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
  _lodash2.default.forEach(uniqueIndex, function (i) {
    primaryIndex[i.asc || i.desc] = i.asc ? 1 : -1;
  });
  log("translated primary index for %s from %j to %j", name, uniqueIndex, primaryIndex);

  //
  // Remove all index information from the schema, as we set the indexes
  // manually below.
  //
  log("transforming schema for %s: %j", tdxSchema.id, tdxSchema.dataSchema);
  var errList = [];
  var mongooseSchema = _schemaToMongoose(tdxSchema.dataSchema, errList, false);
  if (errList.length) {
    throw new Error("invalid mongoose schema: " + errList.join(","));
  }

  log("schema transformed to %j", mongooseSchema);

  return {
    schema: mongooseSchema,
    uniqueIndex: primaryIndex,
    nonUniqueIndexes: nonUniqueIndexes
  };
};

exports.default = {
  definitionToMongoose: definitionToMongoose,
  schemaToMongoose: function schemaToMongoose(tdxSchema, errList, forDisplay) {
    return _schemaToMongoose(_lodash2.default.cloneDeep(tdxSchema), errList, forDisplay);
  },
  schemaToTDX: function schemaToTDX(mongooseSchema, errList) {
    return _schemaToTDX(_lodash2.default.cloneDeep(mongooseSchema), errList);
  },
  indexToTDX: indexToTDX
};
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortHash = exports.parseFunction = exports.splitTDXAccount = exports.shortId = exports.padNumber = exports.makeTDXAccount = exports.isNumeric = exports.isHostNameValid = exports.isDateValid = exports.isEmailValid = exports.buildDataKey = exports.flattenJSON = exports.schemaUtils = exports.databotUtils = exports.resourceUtils = exports.constants = undefined;

var _shortid = __webpack_require__(9);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _resourceUtils = __webpack_require__(7);

var _resourceUtils2 = _interopRequireDefault(_resourceUtils);

var _databotUtils = __webpack_require__(5);

var _databotUtils2 = _interopRequireDefault(_databotUtils);

var _schemaUtils = __webpack_require__(8);

var _schemaUtils2 = _interopRequireDefault(_schemaUtils);

var _flatten = __webpack_require__(6);

var _flatten2 = _interopRequireDefault(_flatten);

var _buildDataKey = __webpack_require__(4);

var _buildDataKey2 = _interopRequireDefault(_buildDataKey);

var _shortHash = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var isEmailValid = function isEmailValid(address) {
  // TODO - improve this (use mailgun?)
  return (/^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(address)
  );
};

var isHostNameValid = function isHostNameValid(hostname) {
  // From http://stackoverflow.com/a/106223
  return (/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(hostname)
  );
};

var isDateValid = function isDateValid(d) {
  // From http://stackoverflow.com/q/1353684
  if (Object.prototype.toString.call(d) !== "[object Date]") return false;
  return !isNaN(d.getTime());
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var makeTDXAccount = function makeTDXAccount(email, tdx) {
  /*
    * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
    */
  return email + "/" + tdx;
};

var padNumber = function padNumber(n, width, z) {
  z = z || "0";
  n = "" + n;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

var splitTDXAccount = function splitTDXAccount(username) {
  /*
    * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
    */
  var result = void 0;
  var split = username.toLowerCase().split("/");
  if (split.length === 2 && isEmailValid(split[0]) && (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0)) {
    result = {
      email: split[0],
      tdx: split[1]
    };
  }
  return result;
};

var parseFunction = function parseFunction(funcText) {
  var funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
  var match = funcReg.exec(funcText.replace(/\n/g, " "));

  if (match) {
    return new Function(match[1].split(","), match[2]);
  }

  return null;
};

exports.constants = _constants2.default;
exports.resourceUtils = _resourceUtils2.default;
exports.databotUtils = _databotUtils2.default;
exports.schemaUtils = _schemaUtils2.default;
exports.flattenJSON = _flatten2.default;
exports.buildDataKey = _buildDataKey2.default;
exports.isEmailValid = isEmailValid;
exports.isDateValid = isDateValid;
exports.isHostNameValid = isHostNameValid;
exports.isNumeric = isNumeric;
exports.makeTDXAccount = makeTDXAccount;
exports.padNumber = padNumber;
exports.shortId = _shortid.generate;
exports.splitTDXAccount = splitTDXAccount;
exports.parseFunction = parseFunction;
exports.shortHash = _shortHash.unique;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=nqm-core-utils.js.map