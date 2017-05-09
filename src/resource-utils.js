import constants from "./constants";

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

export default {
  isResourceType: isResourceType,
  getResourceTypeText: getResourceTypeText,
};

