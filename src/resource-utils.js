import constants from "./constants";
import _ from "lodash";
import shortHash from "./short-hash";

// A 'pure' resource is any non-databot and non-application resource.
const pureResourceTypes = [
  constants.databotBaseType,
  constants.groupResourceType,
  constants.rawFileResourceType,
];

const isResourceType = function(resource, type) {
  return (
    resource.schemaDefinition ?
    (resource.schemaDefinition.id === type || (resource.schemaDefinition.basedOn && resource.schemaDefinition.basedOn.indexOf(type) >= 0)) :  // eslint-disable-line max-len
    resource.baseType === type
  );
};

const getResourceTypeText = function(type) {
  let text;
  switch (type) {
    case constants.groupResourceType:
      text = "folder";
      break;
    case constants.rawFileResourceType:
      text = "raw file";
      break;
    case constants.widgetVisualisationResourceType:
      text = "widget visualisation";
      break;
    case constants.timeSeriesVisualisationResourceType:
      text = "time series visualisation";
      break;
    case constants.mapVisualisationResourceType:
      text = "map visualisation";
      break;
    case constants.statusVisualisationResourceType:
      text = "status visualisation";
      break;
    case constants.scheduledTasksResourceType:
      text = "scheduled tasks";
      break;
    case constants.processHostsResourceType:
      text = "process hosts";
      break;
    default:
      // Most single word resource types are OK.
      text = type;
      break;
  }
  return text;
};

const getShareModeText = function(shareMode) {
  let display;
  switch (shareMode) {
    case constants.publicRWShareMode:
      display = "public view and edit";
      break;
    case constants.publicROShareMode:
      display = "public view, trusted edit";
      break;
    case constants.trustedShareMode:
      display = "trusted only";
      break;
    default:
      display = "!!unknown!!";
      break;
  }
  return display;
};

const primaryKeyFromFlattened = function(resource, datum) {
  // Create primary key from flattened data.
  const key = {};
  _.forEach(resource.schemaDefinition.uniqueIndex, (idx) => {
    const keyField = idx.asc || idx.desc;
    key[keyField] = datum[keyField];
  });

  return key;
};

const getAccountRootId = function(accountId) {
  return specialFolderId(constants.rootFolderPrefix, accountId);
};

const getResourceRootId = function(accountId) {
  return specialFolderId(constants.resourceRootFolderPrefix, accountId);
};

const getApplicationRootId = function(accountId) {
  return specialFolderId(constants.applicationRootFolderPrefix, accountId);
};

const getApplicationDataFolderId = function(accountId) {
  return specialFolderId(constants.applicationDataFolderPrefix, accountId);
};

const getDatabotRootId = function(accountId) {
  return specialFolderId(constants.databotRootFolderPrefix, accountId);
};

//
// Gets the default parent for a given resource type.
// This is used when a resource is created with no parent specified.
//
const getDefaultResourceParent = function(accountId, baseType) {
  let rootId;
  switch (baseType) {
    case constants.datasetResourceType:
      rootId = getResourceRootId(accountId);
      break;
    case constants.applicationBaseType:
      rootId = getApplicationRootId(accountId);
      break;
    case constants.databotBaseType:
      rootId = getDatabotRootId(accountId);
      break;
    default:
      // Do nothing
      break;
  }
  return rootId;
};

const isPureResource = function(baseType) {
  return pureResourceTypes.indexOf(baseType) >= 0;
};

const specialFolderId = function(prefix, accountId) {
  return shortHash.unique(prefix + accountId);
};

export default {
  getAccountRootId: getAccountRootId,
  getApplicationRootId: getApplicationRootId,
  getDatabotRootId: getDatabotRootId,
  getApplicationDataFolderId: getApplicationDataFolderId,
  getDefaultResourceParent: getDefaultResourceParent,
  getResourceRootId: getResourceRootId,
  getResourceTypeText: getResourceTypeText,
  getShareModeText: getShareModeText,
  isPureResource: isPureResource,
  isResourceType: isResourceType,
  primaryKeyFromFlattened: primaryKeyFromFlattened,
  specialFolderId: specialFolderId,
};

