import constants from "./constants";

const isDatabotInstanceRunning = function(databotInstance) {
  return databotInstance && (
    databotInstance.status === constants.runningDatabotStatus || 
    databotInstance.status === constants.installingDatabotStatus || 
    databotInstance.status === constants.partRunningDatabotStatus ||
    databotInstance.status === constants.pausedDatabotStatus
  );
};

export default {
  isDatabotInstanceRunning: isDatabotInstanceRunning
};
