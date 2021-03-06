/* eslint-disable max-len */
import {generate} from "shortid";
import constants from "./constants";
import resourceUtils from "./resource-utils";
import databotUtils from "./databot-utils";
import schemaUtils from "./schema-utils";
import flattenJSON from "./flatten";
import buildDataKey from "./build-data-key";
import {unique} from "./short-hash";

const isEmailValid = function(address) {
  // TODO - improve this (use mailgun?)
  return /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(address);
};

const isHostNameValid = function(hostname) {
  // From http://stackoverflow.com/a/106223
  return /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(hostname);
};

const isDateValid = function(d) {
  // From http://stackoverflow.com/q/1353684
  if (Object.prototype.toString.call(d) !== "[object Date]")
    return false;
  return !isNaN(d.getTime());
};

const isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const makeTDXAccount = function(email, tdx) {
  /*
   * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
   */
  return `${email}/${tdx}`;
};
/**
 * TDX accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
 * @param  {string|object} account - the account to split, can be account object or just the username string.
 */
const splitTDXAccount = function(account) {
  if (!account) {
    return;
  }

  // Normalise to account username.
  if (account.username) {
    account = account.username;
  }
  let result;
  const split = account.toLowerCase().split("/");
  if (split.length === 2 && isEmailValid(split[0]) && (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0)) {
    result = {
      email: split[0],
      tdx: split[1],
    };
  }

  return result;
};

/**
 * TDX resources are stored in resourceId/hostname format, e.g. DhkDI-du/tdx.nqminds.com
 *
 * @param  {object|string} resource - the resource id or object
 * @param  {string} [tdx] - optional tdx id
 */
const makeTDXResourceId = function(resource, tdx) {
  // Can handle resource as string or id.
  if (typeof resource === "object") {
    resource = resource.id;
  }
  if (splitTDXResourceId(resource).tdx) {
    // The resource id is already fully qualified
    return resource;
  } else if (!resource || !tdx) {
    // Invalid args - throw?
    throw new Error("makeTDXResource: invalid args - must provide resource and tdx");
  } else {
    return `${resource}/${tdx.toLowerCase()}`;
  }
};

/**
 * Splits a resource identifier into component parts - local id and tdx id.
 *
 * TDX resources are stored in resourceId/hostname format, e.g. DhkDI-du/tdx.nqminds.com, but they
 * often omit the hostname portion, which indicates a resource local to the current tdx.
 *
 * @param  {string} resourceId
 */
const splitTDXResourceId = function(resourceId) {
  /*
   */
  let result;
  const split = resourceId.split("/");
  if (split.length === 2) {
    if (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0) {
      result = {
        resourceId: split[0],
        tdx: split[1],
      };
    } else {
      // Hostname invalid - do nothing and return 'undefined'.
    }
  } else if (split.length === 1) {
    // Assume a local resource - leave the tdx component empty
    result = {
      resourceId: split[0],
    };
  } else {
    // Invalid number of components - do nothing and return 'undefined'
  }

  return result;
};

/**
 * Splits a schema identifier into component parts - schema id and library id.
 *
 * TDX schema ids are stored in schemaId/libraryId format, e.g. mySuperBespokeSchema/DFHJG_Dk, but they
 * often omit the library portion, which indicates a schema from the system library.
 *
 * @param  {string} schemaId
 */
const splitTDXSchemaId = function(schemaId) {
  /*
   */
  let result;
  const split = schemaId.split("/");
  if (split.length === 2) {
    result = {
      id: split[0],
      libraryId: split[1],
    };
  } else if (split.length === 1) {
    // Assume a local schema - leave the tdx component empty
    result = {
      id: split[0],
      libraryId: constants.schemasResourceId,
    };
  } else {
    // Invalid number of components - do nothing and return 'undefined'
  }

  return result;
};

const padNumber = function(n, width, z) {
  z = z || "0";
  n = `${n}`;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const parseFunction = function(funcText) {
  const funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
  const match = funcReg.exec(funcText.replace(/\n/g, " "));

  if (match) {
    return new Function(match[1].split(","), match[2]);
  }

  return null;
};

const parseTDXError = function(err) {
  let parsed;
  if (err && err.name === "TDXApiError") {
    try {
      parsed = JSON.parse(err.message);
      parsed.failure = JSON.parse(parsed.failure);
    } catch (parseError) {
      parsed = null;
    }
  }

  if (!parsed) {
    // Simulate the format of a TDX error.
    parsed = {
      from: "exception",
      code: err.code || "n/a",
      failure: {
        code: err.code || "n/a",
        message: err.message,
      },
    };
  }

  return parsed;
};

/**
 * Removes camel casing by inserting spaces at word breaks.
 * See https://stackoverflow.com/a/6229124.
 * @param  {string} inp
 */
const unCamelCase = function(inp) {
  return inp
    // insert a space between lower & upper
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    // space before last upper in a sequence followed by lower
    .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
    // uppercase the first character
    .replace(/^./, function(str) {
      return str.toUpperCase();
    });
};

/**
 * Creates a slugified version of the given input, e.g. "The quick brown fox" => "the-quick-brown-fox".
 * @param  {string} inp
 */
const slugify = function(inp) {
  return inp.toString().trim().toLowerCase().replace(/ /g, "-").replace(/([^a-zA-Z0-9\._-]+)/, "");
};

const shortId = () => generate();

export {
  buildDataKey,
  constants,
  databotUtils,
  flattenJSON,
  isEmailValid,
  isDateValid,
  isHostNameValid,
  isNumeric,
  makeTDXAccount,
  makeTDXResourceId,
  padNumber,
  parseFunction,
  parseTDXError,
  resourceUtils,
  schemaUtils,
  shortId,
  slugify,
  splitTDXAccount,
  splitTDXResourceId,
  splitTDXSchemaId,
  unCamelCase,
  unique as shortHash,
};
