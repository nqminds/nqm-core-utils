import constants from "./constants";
import _ from "lodash";
import shortHash from "./short-hash";

// A 'pure' resource is any non-databot and non-application resource.
const pureResourceTypes = [
  constants.datasetResourceType,
  constants.groupResourceType,
  constants.rawFileResourceType,
];

const isResourceType = function(resource, type) {
  type = [].concat(type);
  resource = resource || {};
  return (
    resource.schemaDefinition ? (
      type.indexOf(resource.schemaDefinition.id) >= 0 ||
      _.intersection(resource.schemaDefinition.basedOn || [], type).length > 0
    ) : (
      type.indexOf(resource.baseType) >= 0
    )
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

// Users root folder.
const getAccountRootId = function(accountId) {
  return specialFolderId(constants.rootFolderPrefix, accountId);
};

// Folder containing all 'pure' resources belonging to the user.
const getResourceRootId = function(accountId) {
  return specialFolderId(constants.resourceRootFolderPrefix, accountId);
};

// Folder containing all application-specific data for the user.
const getApplicationRootId = function(accountId) {
  return specialFolderId(constants.applicationRootFolderPrefix, accountId);
};

// Folder containing application definitions created by the user.
const getApplicationDefinitionId = function(accountId) {
  return specialFolderId(constants.applicationDefinitionFolderPrefix, accountId);
};

// Folder containing a users application data.
const getApplicationDataId = function(accountId) {
  return specialFolderId(constants.applicationDataFolderPrefix, accountId);
};

// Folder containing all databot-specific data for the user.
const getDatabotRootId = function(accountId) {
  return specialFolderId(constants.databotRootFolderPrefix, accountId);
};

// Folder containing all account set specific data for the user.
const getAccountSetRootId = function(accountId) {
  return specialFolderId(constants.accountSetRootFolderPrefix, accountId);
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
    case constants.accountSetBaseType:
      rootId = getAccountSetRootId(accountId);
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

const isAccountSet = function(resource) {
  return isResourceType(resource, constants.accountSetResourceType);
};

const isAccountSetRootGroup = function(resource) {
  return isResourceType(resource, constants.accountSetRootGroupResourceType);
};

const isAccountSetGroup = function(resource) {
  return isResourceType(resource, constants.accountSetGroupResourceType);
};

const isApplicationDefinition = function(resource) {
  return isResourceType(resource, constants.applicationDefinitionResourceType);
};

const isApplicationDefinitionGroup = function(resource) {
  return isResourceType(resource, constants.applicationDefinitionGroupResourceType);
};

const isDatabotDefinitionGroup = function(resource) {
  return isResourceType(resource, constants.databotDefinitionGroupResourceType);
};

const isDatabotHostGroup = function(resource) {
  return isResourceType(resource, constants.databotHostGroupResourceType);
};

const isDataset = function(resource) {
  return isResourceType(resource, constants.datasetResourceType);
};

const isDatasetOrRawFile = function(resource) {
  const datasetOrRaw = [constants.datasetResourceType, constants.rawFileResourceType];
  return isResourceType(resource, datasetOrRaw);
};

const isGeoJSON = function(resource) {
  return isResourceType(resource, constants.geojsonResourceType);
};

const isResourceRootGroup = function(resource) {
  return isResourceType(resource, constants.resourceRootGroupResourceType);
};

const isSchema = function(resource) {
  return isResourceType(resource, constants.schemaResourceType);
};

const isScratchGroup = function(resource) {
  return isResourceType(resource, constants.scratchGroupResourceType);
};

const isVocabulary = function(resource) {
  return isResourceType(resource, constants.vocabularyResourceType);
};

const isPlainResourceGroup = (folder) => {
  // Determine if the folder is a simple groupResourceType (no sub-class)
  return (
    folder &&
    folder.schemaDefinition &&
    _.isEqual(
      folder.schemaDefinition.basedOn || [],
      [constants.groupResourceType])
  );
};

const isReadOnlyGroup = (folder) => {
  //
  // Read-only groups => resources can not be created in folders of the following type.
  //
  return (
    isResourceType(folder, constants.applicationRootGroupResourceType) ||
    isResourceType(folder, constants.databotRootGroupResourceType) ||
    isResourceType(folder, constants.databotInstanceGroupResourceType) ||
    isResourceType(folder, constants.rootGroupResourceType)
  );
};

const isReservedGroup = (folder) => {
  //
  // Reserved groups => resources can not be created with the following types.
  //
  return (
    isResourceType(folder, constants.accountSetRootGroupResourceType) ||
    isResourceType(folder, constants.applicationRootGroupResourceType) ||
    isResourceType(folder, constants.applicationDataGroupResourceType) ||
    isResourceType(folder, constants.applicationServerGroupResourceType) ||
    isResourceType(folder, constants.databotRootGroupResourceType) ||
    isResourceType(folder, constants.databotInstanceGroupResourceType) ||
    isResourceType(folder, constants.resourceRootGroupResourceType) ||
    isResourceType(folder, constants.rootGroupResourceType)
  );
};

const specialFolderId = function(prefix, accountId) {
  return shortHash.unique(prefix + accountId);
};

export default {
  getAccountRootId: getAccountRootId,
  getAccountSetRootId,
  getApplicationRootId: getApplicationRootId,
  getDatabotRootId: getDatabotRootId,
  getApplicationDataId: getApplicationDataId,
  getApplicationDefinitionId: getApplicationDefinitionId,
  getDefaultResourceParent: getDefaultResourceParent,
  getResourceRootId: getResourceRootId,
  getResourceTypeText: getResourceTypeText,
  getShareModeText: getShareModeText,
  isAccountSet,
  isAccountSetGroup,
  isAccountSetRootGroup,
  isApplicationDefinition,
  isApplicationDefinitionGroup,
  isDatabotDefinitionGroup,
  isDatabotHostGroup,
  isDataset,
  isDatasetOrRawFile,
  isGeoJSON,
  isPlainResourceGroup,
  isPureResource,
  isReadOnlyGroup,
  isReservedGroup,
  isResourceRootGroup,
  isResourceType,
  isSchema,
  isScratchGroup,
  isVocabulary,
  primaryKeyFromFlattened: primaryKeyFromFlattened,
  specialFolderId: specialFolderId,
};

