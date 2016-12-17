
module.exports = (function() {
  "use strict";

  var constants = require("nqm-core-constants");

  var isDatabotInstanceRunning = function(databotInstance) {
    return databotInstance && (
      databotInstance.status === constants.runningDatabotStatus || 
      databotInstance.status === constants.installingDatabotStatus || 
      databotInstance.status === constants.partRunningDatabotStatus ||
      databotInstance.status === constants.pausedDatabotStatus
    );
  }

  return {
    isDatabotInstanceRunning: isDatabotInstanceRunning
  }
}());