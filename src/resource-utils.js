import constants from "./constants";
import _ from "lodash";

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

export const getShareModeText = function(shareMode) {
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

export const primaryKeyFromFlattened = function(resource, datum) {
  // Create primary key from flattened data.
  const key = {};
  _.forEach(resource.schemaDefinition.uniqueIndex, (idx) => {
    const keyField = idx.asc || idx.desc;
    key[keyField] = datum[keyField];
  });

  return key;
};

export default {
  getResourceTypeText: getResourceTypeText,
  getShareModeText,
  isResourceType: isResourceType,
  primaryKeyFromFlattened,
};

