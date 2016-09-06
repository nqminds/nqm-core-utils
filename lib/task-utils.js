
module.exports = (function() {
  "use strict";

  var constants = require("nqm-constants");

  var isTaskInstanceRunning = function(taskInstance) {
    return taskInstance && (
      taskInstance.status === constants.runningTaskStatus || 
      taskInstance.status === constants.installingTaskStatus || 
      taskInstance.status === constants.partRunningTaskStatus ||
      taskInstance.status === constants.pausedTaskStatus
    );
  }

  return {
    isTaskInstanceRunning: isTaskInstanceRunning
  }
}());