
module.exports = (function() {
  "use strict";

  var constants = require("nqm-constants");

  var isDatabotInstanceRunning = function(databotInstance) {
    return databotInstance && (
      databotInstance.status === constants.runningTaskStatus || 
      databotInstance.status === constants.installingTaskStatus || 
      databotInstance.status === constants.partRunningTaskStatus ||
      databotInstance.status === constants.pausedTaskStatus
    );
  }

  return {
    isDatabotInstanceRunning: isDatabotInstanceRunning
  }
}());