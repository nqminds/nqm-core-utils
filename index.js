/**
 * Created by toby on 23/10/15.
 */

module.exports = (function() {
  "use strict";

  var _ = require("lodash");

  return {
    flattenJSON: require("./lib/flatten"),
    buildDataKey: function(fieldPaths, params) {
      /*
       * Extract a dictionary of values from params corresponding to the given array of field paths,
       * where paths use the dot notation, e.g. address.postcode.
       */
      var errLog = require("debug")("nqm-utils:buildDataKey:error");
      var parser = require("nqm-mongo-parse");
      var keys = {};
      _.forEach(fieldPaths, function(f) {
        // Get the field path.
        var key = f.asc || f.desc;
        var pointers = parser.DotNotationPointers(params, key);
        if (pointers.length === 0 || !pointers[0].val) {
          errLog("undefined key for field %s", key);
        } else {
          keys[key] = pointers[0].val;
        }
      });
      return keys;
    }
  }
}());
