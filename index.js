/**
 * Created by toby on 23/10/15.
 */

module.exports = (function() {
  "use strict";

  var isEmailValid = function(address) { 
    // TODO - improve this (use mailgun?)
    return /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(address);
  };

  var isHostNameValid = function(hostname) {
    // From http://stackoverflow.com/a/106223
    return /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(hostname);
  };
  
  var isDateValid = function(d) {
    // From http://stackoverflow.com/q/1353684 
    if (Object.prototype.toString.call(d) !== "[object Date]")
      return false;
    return !isNaN(d.getTime());
  }
  
  return {
    resourceUtils: require("./lib/resource-utils"),
    loadConfig: require("./lib/load-config"),
    flattenJSON: require("./lib/flatten"),
    buildDataKey: require("./lib/build-data-key"),
    isEmailValid: isEmailValid,
    isDateValid: isDateValid,
    isHostNameValid: isHostNameValid,
    isNumeric: function (n) { return !isNaN(parseFloat(n)) && isFinite(n); },
    makeTDXAccount: function(email, tdx) {
      /*
       * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
       */
      return email + "/" + tdx;
    },
    splitTDXAccount: function(username) {
      /*
       * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
       */
      var result;
      var split = username.split("/");
      if (split.length === 2 && isEmailValid(split[0]) && (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0)) {
        result = {
          email: split[0],
          tdx: split[1]
        };
      }
      return result;
    }
  }
}());
