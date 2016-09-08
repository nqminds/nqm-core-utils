(function(exports) {
  "use strict";

  var log = require("debug")("nqm-utils:oauthHooks");
  var errLog = require("debug")("nqm-utils:oauthHooks:error");
  var ipaddr = require("ipaddr.js");
  var _ = require("lodash");
  var requestIP = require("request-ip");
  var Promise = require("bluebird");
  var bcrypt = Promise.promisifyAll(require("bcrypt"));

  exports.grantClientToken = function (credentials, req, cb) {
    // Load auth server when we need it to prevent circular dependencies (auth server uses nqmUtils)
    var authServer = require("nqm-auth-server");

    credentials = req.authorization.credentials.split(":");
    if (credentials.length < 2) {
      errLog("grantClientToken - invalid credentials: %s", req.authorization.credentials);
      return cb(null, false);
    }
    var shareId = credentials[0];
    var secret = credentials[1];
    log("grantClientToken for %s", shareId);
    authServer.adminApi.getAccountForUser(shareId)
      .then(function(share) {
        if (!share) {
          errLog("share not found: %s", shareId);
          return Promise.reject(new Error("share not found for " + shareId));
        }
        return checkAccountSecret(share, secret);
      })
      .then(function(share) {
        if (!share) {
          errLog("hash compare failed");
          return Promise.reject(new Error("hash compare failed"));
        }

        // Ask auth server to sign the share.
        return authServer.adminApi.createVerifiedIdentityToken(share.username, requestIP.getClientIp(req), null, req.body.ttl);
      })
      .then(function(signedToken) {
        log("got signed token");
        cb(null, signedToken);
      })
      .catch(function(err) {
        errLog("authServer token lookup failed: %s",err.message);
        cb(null, false);
      });
  };

  exports.authenticateToken = function (tokenId, req, cb) {
    // Load auth server when we need it to prevent circular dependencies (auth server uses nqmUtils)
    var authServer = require("nqm-auth-server");

    log("authenticateToken - performing jwt decode");
    authServer.testApi.verify(tokenId)
      .then(function(decoded) {
        // Check referrers match.
        if (!_.isEqual(ipaddr.process(decoded.ref),ipaddr.process(requestIP.getClientIp(req)))) {
          errLog("auth token remote address mismatch, wanted %s got %s", decoded.ref, requestIP.getClientIp(req));
          return Promise.reject(new Error("mismatched remote address"));
        }

        // Check expiry time
        if (!decoded.exp || (decoded.exp*1000) < Date.now()) {
          errLog("auth token expired");
          return Promise.reject(new Error("token expired"));
        }

        var authData = {
          token: tokenId,
          capability: decoded
        };
        req.clientId = authData;
        log("decoded auth data is %j", authData.capability);
        cb(null, authData);
      })
      .catch(function(err) {
        errLog("failed to verify jwt: %s", err.message);
        cb(null, false);
      });
  };

  var checkAccountSecret = function(account, secret) {
    if (!account) {
      return Promise.reject(new Error("invalid args"));
    }
    if (!account.hash && (!secret || secret.length === 0)) {
      log("no hash present");
      return Promise.resolve(account);
    }
    return bcrypt.compareAsync(secret, account.hash)
      .then(function(result) {
        if (result) {
          log("hash compare OK");
          return account;
        } else {
          errLog("hash compare failed");
          return null;
        }
      });
  };

}(module.exports));
