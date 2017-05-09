(function() {
  var exLog = console.log;
  console.log = function(msg) {
    // TODO - check for 'debug enabled' flag.
    exLog.apply(this, arguments);
  }
})();

export default console.log;
