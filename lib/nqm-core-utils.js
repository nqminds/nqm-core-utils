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
  accountSetBaseType: "accountSetBase",
  accountSetResourceType: "accountSet",

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
  databotActiveHostGroupResourceType: "databotActiveHostGroup",
  databotControllerResourceType: "databotController",

  applicationRootGroupResourceType: "applicationRootGroup",
  applicationDefinitionGroupResourceType: "applicationDefinitionGroup",
  applicationServerGroupResourceType: "applicationServerGroup",
  applicationDataGroupResourceType: "applicationDataGroup",

  accountSetRootGroupResourceType: "accountSetRootGroup",
  accountSetGroupResourceType: "accountSetGroup",

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
  accountSetAccountType: "accountSet",

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

  pauseDatabotInstance: "pause",
  resumeDatabotInstance: "resume",
  stopDatabotInstance: "stop",

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
  githubAuthService: "oauth:github",
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

  accountSetRootFolderPrefix: "ug.",
  accountSetRootFolderName: "user groups",

  applicationRootFolderPrefix: "a.",
  applicationRootFolderName: "applications",

  applicationDefinitionFolderPrefix: "adef.",
  applicationDefinitionFolderName: "application definitions",

  applicationServerFolderPrefix: "as.",
  applicationServerFolderName: "application servers",

  applicationDataFolderPrefix: "ad.",
  applicationDataFolderName: "authorised applications",

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

  databotActiveHostFolderPrefix: "dah.",
  databotActiveHostFolderName: "active databot hosts",

  // Application data ownership modes
  readOnlyOwnershipMode: "read-only",
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
  type = [].concat(type);
  resource = resource || {};
  return resource.schemaDefinition ? type.indexOf(resource.schemaDefinition.id) >= 0 || _lodash2.default.intersection(resource.schemaDefinition.basedOn || [], type).length > 0 : type.indexOf(resource.baseType) >= 0;
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

// Folder containing all account set specific data for the user.
var getAccountSetRootId = function getAccountSetRootId(accountId) {
  return specialFolderId(_constants2.default.accountSetRootFolderPrefix, accountId);
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
    case _constants2.default.accountSetBaseType:
      rootId = getAccountSetRootId(accountId);
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

var isAccountSet = function isAccountSet(resource) {
  return isResourceType(resource, _constants2.default.accountSetResourceType);
};

var isAccountSetRootGroup = function isAccountSetRootGroup(resource) {
  return isResourceType(resource, _constants2.default.accountSetRootGroupResourceType);
};

var isAccountSetGroup = function isAccountSetGroup(resource) {
  return isResourceType(resource, _constants2.default.accountSetGroupResourceType);
};

var isApplicationDefinition = function isApplicationDefinition(resource) {
  return isResourceType(resource, _constants2.default.applicationDefinitionResourceType);
};

var isApplicationDefinitionGroup = function isApplicationDefinitionGroup(resource) {
  return isResourceType(resource, _constants2.default.applicationDefinitionGroupResourceType);
};

var isDatabotDefinitionGroup = function isDatabotDefinitionGroup(resource) {
  return isResourceType(resource, _constants2.default.databotDefinitionGroupResourceType);
};

var isDatabotHostGroup = function isDatabotHostGroup(resource) {
  return isResourceType(resource, _constants2.default.databotHostGroupResourceType);
};

var isDatabotSystemResource = function isDatabotSystemResource(resource) {
  return isResourceType(resource, _constants2.default.databotInstancesResourceType) || isResourceType(resource, _constants2.default.databotProcessesResourceType) || isResourceType(resource, _constants2.default.activeDatabotHostsResourceType) || isResourceType(resource, _constants2.default.databotInstanceOutputResourceType);
};

var isDataset = function isDataset(resource) {
  return isResourceType(resource, _constants2.default.datasetResourceType);
};

var isDatasetOrRawFile = function isDatasetOrRawFile(resource) {
  var datasetOrRaw = [_constants2.default.datasetResourceType, _constants2.default.rawFileResourceType];
  return isResourceType(resource, datasetOrRaw);
};

var isDatasetFilter = function isDatasetFilter(resource) {
  return isResourceType(resource, _constants2.default.datasetFilterResourceType);
};

var isGeoJSON = function isGeoJSON(resource) {
  return isResourceType(resource, _constants2.default.geojsonResourceType);
};

var isResourceRootGroup = function isResourceRootGroup(resource) {
  return isResourceType(resource, _constants2.default.resourceRootGroupResourceType);
};

var isSchema = function isSchema(resource) {
  return isResourceType(resource, _constants2.default.schemaResourceType);
};

var isScratchGroup = function isScratchGroup(resource) {
  return isResourceType(resource, _constants2.default.scratchGroupResourceType);
};

var isVocabulary = function isVocabulary(resource) {
  return isResourceType(resource, _constants2.default.vocabularyResourceType);
};

var isPlainResourceGroup = function isPlainResourceGroup(folder) {
  // Determine if the folder is a simple groupResourceType (no sub-class)
  return folder && folder.schemaDefinition && _lodash2.default.isEqual(folder.schemaDefinition.basedOn || [], [_constants2.default.groupResourceType]);
};

var isReadOnlyGroup = function isReadOnlyGroup(folder) {
  //
  // Read-only groups => resources can not be created in folders of the following type.
  //
  return isResourceType(folder, _constants2.default.applicationRootGroupResourceType) || isResourceType(folder, _constants2.default.databotRootGroupResourceType) || isResourceType(folder, _constants2.default.databotInstanceGroupResourceType) || isResourceType(folder, _constants2.default.rootGroupResourceType);
};

var isReservedGroup = function isReservedGroup(folder) {
  //
  // Reserved groups => resources can not be created with the following types.
  //
  return isResourceType(folder, _constants2.default.accountSetRootGroupResourceType) || isResourceType(folder, _constants2.default.applicationRootGroupResourceType) || isResourceType(folder, _constants2.default.applicationDataGroupResourceType) || isResourceType(folder, _constants2.default.applicationServerGroupResourceType) || isResourceType(folder, _constants2.default.databotRootGroupResourceType) || isResourceType(folder, _constants2.default.databotInstanceGroupResourceType) || isResourceType(folder, _constants2.default.resourceRootGroupResourceType) || isResourceType(folder, _constants2.default.rootGroupResourceType);
};

var specialFolderId = function specialFolderId(prefix, accountId) {
  return _shortHash2.default.unique(prefix + accountId);
};

exports.default = {
  getAccountRootId: getAccountRootId,
  getAccountSetRootId: getAccountSetRootId,
  getApplicationRootId: getApplicationRootId,
  getDatabotRootId: getDatabotRootId,
  getApplicationDataId: getApplicationDataId,
  getApplicationDefinitionId: getApplicationDefinitionId,
  getDefaultResourceParent: getDefaultResourceParent,
  getResourceRootId: getResourceRootId,
  getResourceTypeText: getResourceTypeText,
  getShareModeText: getShareModeText,
  isAccountSet: isAccountSet,
  isAccountSetGroup: isAccountSetGroup,
  isAccountSetRootGroup: isAccountSetRootGroup,
  isApplicationDefinition: isApplicationDefinition,
  isApplicationDefinitionGroup: isApplicationDefinitionGroup,
  isDatabotDefinitionGroup: isDatabotDefinitionGroup,
  isDatabotHostGroup: isDatabotHostGroup,
  isDatabotSystemResource: isDatabotSystemResource,
  isDataset: isDataset,
  isDatasetOrRawFile: isDatasetOrRawFile,
  isDatasetFilter: isDatasetFilter,
  isGeoJSON: isGeoJSON,
  isPlainResourceGroup: isPlainResourceGroup,
  isPureResource: isPureResource,
  isReadOnlyGroup: isReadOnlyGroup,
  isReservedGroup: isReservedGroup,
  isResourceRootGroup: isResourceRootGroup,
  isResourceType: isResourceType,
  isSchema: isSchema,
  isScratchGroup: isScratchGroup,
  isVocabulary: isVocabulary,
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

var log = (0, _debug2.default)("nqm-core-utils:schema-utils");
var errLog = (0, _debug2.default)("nqm-core-utils:schema-utils:error");

// From mongoose/lib/schema.js
var reservedFieldNames = ["_id", // <---- TDX specific
"prototype",
// EventEmitter
"emit", "on", "once", "listeners", "removeListener",
// document properties and functions
"collection", "db", "errors", "init", "isModified", "isNew", "get", "modelName", "save", "schema", "set", "toObject", "validate", "remove",
// hooks.js
"_pres", "_posts", "__update"];

var vocabTypeLookupMongoose = function vocabTypeLookupMongoose(vocab, id) {
  var vocabDefinition = _lodash2.default.find(vocab, function (v) {
    return v.id === id;
  });
  return vocabDefinition && vocabDefinition.basedOn[0];
};

var vocabTypeLookupTDX = function vocabTypeLookupTDX(vocab, id) {
  var vocabDefinition = _lodash2.default.find(vocab, function (v) {
    return v.id === id;
  });
  return vocabDefinition && vocabDefinition.basedOn.concat(vocabDefinition.id);
};

// Convert from simple array list to TDX index format.
// Assume ascending sort direction.
// e.g. ["id", "code"] => [{asc: "id"}, {asc: "code"}]
//
// Will also convert from mongoose index spec to tdx format.
// e.g. {id: 1, code: -1} => [{asc: "id"}, {desc: "code"}]
//
var indexToTDX = function indexToTDX(indexFields, errList) {
  var tdxIndex = [];
  errList = errList || [];

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

var indexToMongoose = function indexToMongoose(index) {
  var mongooseIndex = {};
  _lodash2.default.forEach(index, function (i) {
    mongooseIndex[i.asc || i.desc] = i.asc ? 1 : -1;
  });

  return mongooseIndex;
};

var validateTDXType = function validateTDXType(vocab, type, errList) {
  var properType = vocabTypeLookupTDX(vocab, type);
  if (!properType) {
    type = type.toLowerCase();
    if (!_constants2.default.mongooseTypes[type]) {
      errList.push("invalid base type: " + type);
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
var _schemaToTDX = function _schemaToTDX(vocab, schema, errList) {
  if ((typeof schema === "undefined" ? "undefined" : _typeof(schema)) === "object") {
    _lodash2.default.forEach(schema, function (value, key) {
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
            if (_typeof(value[0]) === "object") {
              // A type specification for a type named 'type' as an array, groan...
              // e.g. {type: [{type: "string"}]} - an array of strings
              schema[key] = _schemaToTDX(vocab, value, errList);
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
        } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
          // An object spec => recurse
          schema[key] = _schemaToTDX(vocab, value, errList);
        } else {
          errList.push("invalid schema definition, invalid 'type' spec: " + schema);
        }
      } else if (key === "__tdxRequired" || key === "__tdxDefault" || key === "__tdxDescription") {
        // Do nothing.
      } else if (Array.isArray(value)) {
        if (value.length === 1) {
          value[0] = _schemaToTDX(vocab, value[0], errList);
        } else if (value.length) {
          // Multi-value array => a mongoose-style TDX vocab list, e.g. {cost: ["number", "currency"]}
          schema[key] = { __tdxType: value };
        } else {
          // Assume a 'mixed' mongoose type.
          schema[key] = [];
        }
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
        // Recurse for sub-documents
        schema[key] = _schemaToTDX(vocab, value, errList);
      } else if (typeof value === "string") {
        // An implied type spec, e.g. {name: "string"} - convert to TDX
        schema[key] = { __tdxType: validateTDXType(vocab, value, errList) };
      } else {
        errList.push("invalid schema definition, unexpected: " + schema);
      }
    });

    return schema;
  } else if (typeof schema === "string") {
    return { __tdxType: validateTDXType(vocab, schema, errList) };
  } else {
    errList.push("invalid schema definition, unexpected: " + schema);
  }
};

var validateMongooseType = function validateMongooseType(vocab, type, errList) {
  var properType = void 0;
  type = vocabTypeLookupMongoose(vocab, type) || type;
  type = type.toLowerCase();
  if (!_constants2.default.mongooseTypes[type]) {
    errList.push("invalid base type: " + type);
  } else {
    properType = _lodash2.default.capitalize(type);
  }
  return properType;
};

// Converts a schema from TDX to mongoose format.
var _schemaToMongoose = function _schemaToMongoose(vocab, schema, errList, forDisplay) {
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
          schema.type = validateMongooseType(vocab, schema.type, errList);
        }
      }
    } else if (Array.isArray(v)) {
      // Array
      if (v.length > 1) {
        errList.push("invalid array type specification for key: " + k);
      } else if (v.length > 0) {
        if (typeof v[0] === "string") {
          // Array of single type.
          schema[k] = [{ type: validateMongooseType(vocab, v[0], errList) }];
        } else {
          // Array of sub-document spec.
          schema[k] = [_schemaToMongoose(vocab, v[0], errList, forDisplay)];
        }
      }
    } else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
      // Sub-document
      schema[k] = _schemaToMongoose(vocab, v, errList, forDisplay);
    } else if (typeof v !== "string") {
      // TODO - review
      // Don't treat this as an error, just ignore.
      // Seems to be caused be some legacy schema definitions with { default: true, required: true } etc.
      // errList.push("invalid schema definition - unexpected type for key '" + k + "': " + (typeof v));
      errLog("invalid schema definition - unexpected type for key '" + k + "' : " + (typeof v === "undefined" ? "undefined" : _typeof(v)));
      delete schema[k];
    } else {
      schema[k] = { type: validateMongooseType(vocab, v, errList) };
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
  var primaryIndex = indexToMongoose(uniqueIndex);
  log("translated primary index for %s from %j to %j", name, uniqueIndex, primaryIndex);

  //
  // Remove all index information from the schema, as we set the indexes
  // manually below.
  //
  log("transforming schema for %s: %j", tdxSchema.id, tdxSchema.dataSchema);
  var errList = [];
  var mongooseSchema = _schemaToMongoose(null, tdxSchema.dataSchema, errList, false);
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
  schemaToMongoose: function schemaToMongoose(vocab, tdxSchema, errList, forDisplay) {
    return _schemaToMongoose(vocab || [], _lodash2.default.cloneDeep(tdxSchema), errList, forDisplay);
  },
  schemaToTDX: function schemaToTDX(vocab, mongooseSchema, errList) {
    return _schemaToTDX(vocab || [], _lodash2.default.cloneDeep(mongooseSchema), errList);
  },
  indexToMongoose: indexToMongoose,
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
exports.shortHash = exports.unCamelCase = exports.splitTDXSchemaId = exports.splitTDXResourceId = exports.splitTDXAccount = exports.slugify = exports.shortId = exports.schemaUtils = exports.resourceUtils = exports.parseTDXError = exports.parseFunction = exports.padNumber = exports.makeTDXResourceId = exports.makeTDXAccount = exports.isNumeric = exports.isHostNameValid = exports.isDateValid = exports.isEmailValid = exports.flattenJSON = exports.databotUtils = exports.constants = exports.buildDataKey = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable max-len */


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
/**
 * TDX accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
 * @param  {string|object} account - the account to split, can be account object or just the username string.
 */
var splitTDXAccount = function splitTDXAccount(account) {
  if (!account) {
    return;
  }

  // Normalise to account username.
  if (account.username) {
    account = account.username;
  }
  var result = void 0;
  var split = account.toLowerCase().split("/");
  if (split.length === 2 && isEmailValid(split[0]) && (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0)) {
    result = {
      email: split[0],
      tdx: split[1]
    };
  }

  return result;
};

/**
 * TDX resources are stored in resourceId/hostname format, e.g. DhkDI-du/tdx.nqminds.com
 *
 * @param  {object|string} resource - the resource id or object
 * @param  {string} [tdx] - optional tdx id
 */
var makeTDXResourceId = function makeTDXResourceId(resource, tdx) {
  // Can handle resource as string or id.
  if ((typeof resource === "undefined" ? "undefined" : _typeof(resource)) === "object") {
    resource = resource.id;
  }
  if (splitTDXResourceId(resource).tdx) {
    // The resource id is already fully qualified
    return resource;
  } else if (!resource || !tdx) {
    // Invalid args - throw?
    throw new Error("makeTDXResource: invalid args - must provide resource and tdx");
  } else {
    return resource + "/" + tdx.toLowerCase();
  }
};

/**
 * Splits a resource identifier into component parts - local id and tdx id.
 *
 * TDX resources are stored in resourceId/hostname format, e.g. DhkDI-du/tdx.nqminds.com, but they
 * often omit the hostname portion, which indicates a resource local to the current tdx.
 *
 * @param  {string} resourceId
 */
var splitTDXResourceId = function splitTDXResourceId(resourceId) {
  /*
   */
  var result = void 0;
  var split = resourceId.split("/");
  if (split.length === 2) {
    if (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0) {
      result = {
        resourceId: split[0],
        tdx: split[1]
      };
    } else {
      // Hostname invalid - do nothing and return 'undefined'.
    }
  } else if (split.length === 1) {
    // Assume a local resource - leave the tdx component empty
    result = {
      resourceId: split[0]
    };
  } else {
    // Invalid number of components - do nothing and return 'undefined'
  }

  return result;
};

/**
 * Splits a schema identifier into component parts - schema id and library id.
 *
 * TDX schema ids are stored in schemaId/libraryId format, e.g. mySuperBespokeSchema/DFHJG_Dk, but they
 * often omit the library portion, which indicates a schema from the system library.
 *
 * @param  {string} schemaId
 */
var splitTDXSchemaId = function splitTDXSchemaId(schemaId) {
  /*
   */
  var result = void 0;
  var split = schemaId.split("/");
  if (split.length === 2) {
    result = {
      id: split[0],
      libraryId: split[1]
    };
  } else if (split.length === 1) {
    // Assume a local schema - leave the tdx component empty
    result = {
      id: split[0],
      libraryId: _constants2.default.schemasResourceId
    };
  } else {
    // Invalid number of components - do nothing and return 'undefined'
  }

  return result;
};

var padNumber = function padNumber(n, width, z) {
  z = z || "0";
  n = "" + n;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

var parseFunction = function parseFunction(funcText) {
  var funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
  var match = funcReg.exec(funcText.replace(/\n/g, " "));

  if (match) {
    return new Function(match[1].split(","), match[2]);
  }

  return null;
};

var parseTDXError = function parseTDXError(err) {
  var parsed = void 0;
  if (err && err.name === "TDXApiError") {
    try {
      parsed = JSON.parse(err.message);
      parsed.failure = JSON.parse(parsed.failure);
    } catch (parseError) {
      parsed = null;
    }
  }

  if (!parsed) {
    // Simulate the format of a TDX error.
    parsed = {
      from: "exception",
      code: err.code || "n/a",
      failure: {
        code: err.code || "n/a",
        message: err.message
      }
    };
  }

  return parsed;
};

/**
 * Removes camel casing by inserting spaces at word breaks.
 * See https://stackoverflow.com/a/6229124.
 * @param  {string} inp
 */
var unCamelCase = function unCamelCase(inp) {
  return inp
  // insert a space between lower & upper
  .replace(/([a-z])([A-Z])/g, "$1 $2")
  // space before last upper in a sequence followed by lower
  .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
  // uppercase the first character
  .replace(/^./, function (str) {
    return str.toUpperCase();
  });
};

/**
 * Creates a slugified version of the given input, e.g. "The quick brown fox" => "the-quick-brown-fox".
 * @param  {string} inp
 */
var slugify = function slugify(inp) {
  return inp.toString().trim().toLowerCase().replace(/ /g, "-").replace(/([^a-zA-Z0-9\._-]+)/, "");
};

var shortId = function shortId() {
  return (0, _shortid.generate)();
};

exports.buildDataKey = _buildDataKey2.default;
exports.constants = _constants2.default;
exports.databotUtils = _databotUtils2.default;
exports.flattenJSON = _flatten2.default;
exports.isEmailValid = isEmailValid;
exports.isDateValid = isDateValid;
exports.isHostNameValid = isHostNameValid;
exports.isNumeric = isNumeric;
exports.makeTDXAccount = makeTDXAccount;
exports.makeTDXResourceId = makeTDXResourceId;
exports.padNumber = padNumber;
exports.parseFunction = parseFunction;
exports.parseTDXError = parseTDXError;
exports.resourceUtils = _resourceUtils2.default;
exports.schemaUtils = _schemaUtils2.default;
exports.shortId = shortId;
exports.slugify = slugify;
exports.splitTDXAccount = splitTDXAccount;
exports.splitTDXResourceId = splitTDXResourceId;
exports.splitTDXSchemaId = splitTDXSchemaId;
exports.unCamelCase = unCamelCase;
exports.shortHash = _shortHash.unique;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=nqm-core-utils.js.map