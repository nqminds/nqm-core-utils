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

const splitTDXAccount = function(username) {
  /*
   * tdx accounts are stored in email/hostname format, e.g. toby.ealden@gmail.com/tdx.nqminds.com
   */
  let result;
  const split = username.toLowerCase().split("/");
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
 * If a resource object is given, the tdx parameter isn't necessary as it will be inferred
 * from the resource owner.
 *
 * @param  {object|string} resource - the resource id or object
 * @param  {object} [tdx] - optional tdx id
 */
const makeTDXResource = function(resource, tdx) {
  if (typeof resource === "object") {
    const ownerAccount = splitTDXAccount(resource.owner);
    return `${resource.id}/${ownerAccount.tdx}`;
  } else {
    return `${resource}/${tdx}`;
  }
};

const splitTDXResource = function(resourceId) {
  /*
   * tdx resources are stored in resourceId/hostname format, e.g. DhkDI-du/tdx.nqminds.com
   */
  let result;
  const split = resourceId.toLowerCase().split("/");
  if (split.length === 2 && (isHostNameValid(split[1]) || split[1].indexOf("localhost:") === 0)) {
    result = {
      resourceId: split[0],
      tdx: split[1],
    };
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

export {
  buildDataKey,
  constants,
  databotUtils,
  flattenJSON,
  generate as shortId,
  isEmailValid,
  isDateValid,
  isHostNameValid,
  isNumeric,
  makeTDXAccount,
  makeTDXResource,
  padNumber,
  parseFunction,
  resourceUtils,
  schemaUtils,
  splitTDXAccount,
  splitTDXResource,
  unique as shortHash,
};
