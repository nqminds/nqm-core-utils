/**
 * Created by toby on 23/10/15.
 */

module.exports = (function() {
  "use strict";

  return {
    loadConfig: require("./lib/load-config"),
    flattenJSON: require("./lib/flatten"),
    buildDataKey: require("./lib/build-data-key"),
    isEmailValid: function(address) { 
      // TODO - improve this (use mailgun?)
      return /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(address);
    },
    isHostNameValid: function(hostname) {
      // From http://stackoverflow.com/a/106223
      return /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(hostname);
    },
    isNumeric: function (n) { return !isNaN(parseFloat(n)) && isFinite(n); }
  }
}());
