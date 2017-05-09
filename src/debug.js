/* eslint-disable no-console */
(function() {
  const exLog = console.log;
  console.log = function() {
    // TODO - check for 'debug enabled' flag.
    exLog.apply(this, arguments);
  };
})();

export default console.log;
