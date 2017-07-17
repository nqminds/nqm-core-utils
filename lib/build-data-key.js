module.exports = (function() {
  "use strict";

  /*
    * Extract a dictionary of values from params corresponding to the given array of field paths,
    * where paths use the dot notation, e.g. address.postcode.
    */
  var buildDataKey = function(fieldPaths, params, failIfIncomplete) {
    var errLog = require("debug")("nqm-utils:buildDataKey:error");
    var parser = require("mongo-parse");
    var _ = require("lodash");
  
    var keys = {};
    _.forEach(fieldPaths, function(f) {
      // Get the field path.
      var key = f.asc || f.desc;
      var pointers = parser.DotNotationPointers(params, key);
      if (pointers.length === 0 || typeof pointers[0].val === "undefined") {
        errLog("no key data for field '%s' in %j", key, params);
        if (failIfIncomplete) {
          throw new Error(`buildDataKey - incomplete primary key: no data for '${key}' in ${JSON.stringify(params)}`);
        }
      } else {
        keys[key] = pointers[0].val;
      }
    });
    return keys;
  }

  return buildDataKey;
}());