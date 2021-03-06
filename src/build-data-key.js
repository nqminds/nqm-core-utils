import debug from "debug";
import parser from "mongo-parse";
import _ from "lodash";

const errLog = debug("nqm-core-utils:build-data-key");

/*
  * Extract a dictionary of values from params corresponding to the given array of field paths,
  * where paths use the dot notation, e.g. address.postcode.
  */
const buildDataKey = function(fieldPaths, params, failIfIncomplete) {
  const keys = {};
  _.forEach(fieldPaths, function(f) {
    // Get the field path.
    const key = f.asc || f.desc;
    const pointers = parser.DotNotationPointers(params, key);
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
};

export default buildDataKey;
