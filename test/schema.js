/* global describe it */
/* eslint-disable no-underscore-dangle */
module.exports = (function() {
  const utils = require("../lib/nqm-core-utils");
  const schemaUtils = utils.schemaUtils;
  const assert = require("assert");

  describe("Schema", function() {
    it("converts a simple mongoose schema to TDX", function() {
      const simple = {
        name: "string",
      };
      const errs = [];
      const convert = schemaUtils.schemaToTDX(simple, errs);
      assert.equal(0, errs.length);
      assert.equal(convert.name.__tdxType[0], "string");
    });
    it("converts a complex mongoose schema to TDX", function() {
      const simple = {
        name: "string",
        value: {
          foo: ["string"],
        },
      };
      const errs = [];
      const convert = schemaUtils.schemaToTDX(simple, errs);
      assert.equal(0, errs.length);
      assert.equal(convert.name.__tdxType[0], "string");
      assert.equal(convert.value.foo[0].__tdxType[0], "string");
    });
    it("converts a mixed mongoose/TDX schema to TDX", function() {
      const simple = {
        name: "string",
        value: {
          foo: ["string"], // array of string
          bar: {__tdxType: "number"}, // number
          hello: {__tdxType: ["number", "currency"]}, // number
          world1: ["number", "currency"], // number
          world2: ["number"], // array of number
          world3: [{__tdxType: ["number", "currency"]}], // array of number
          test1: {type: ["number", "currency"]},
          test2: {__tdxType: ["number", "currency"]},
        },
      };
      const errs = [];
      const convert = schemaUtils.schemaToTDX(simple, errs);
      assert.equal(0, errs.length);
      assert.equal(convert.name.__tdxType[0], "string");
      assert.equal(convert.value.foo[0].__tdxType[0], "string");
      assert.equal(convert.value.bar.__tdxType[0], "number");
      assert.equal(convert.value.hello.__tdxType[0], "number");
      assert.equal(convert.value.world1.__tdxType[0], "number");
      assert.equal(convert.value.world2[0].__tdxType[0], "number");
      assert.equal(convert.value.world3[0].__tdxType[0], "number");
      assert.equal(convert.value.test1.__tdxType[0], "number");
      assert.equal(convert.value.test2.__tdxType[0], "number");
    });
    it("converts a mongoose schema including the 'type' keyword", function() {
      const simple = {
        type: {
          type: "string",
        },
      };
      const errs = [];
      const convert = schemaUtils.schemaToTDX(simple, errs);
      assert.equal(0, errs.length);
      assert.equal(convert.type.__tdxType[0], "string");
    });
    it("converts a mongoose schema including the 'type' keyword as an array", function() {
      const simple = {
        type: [{
          type: "string",
        }],
      };
      const errs = [];
      const convert = schemaUtils.schemaToTDX(simple, errs);
      assert.equal(0, errs.length);
      assert.equal(convert.type[0].__tdxType[0], "string");
    });
    it("validates a TDX schema including the 'type' keyword", function() {
      const simple = {
        type: {__tdxType: "string"},
      };
      const errs = [];
      const convert = schemaUtils.schemaToTDX(simple, errs);
      assert.equal(0, errs.length);
      assert.equal(convert.type.__tdxType[0], "string");
    });
    it("validates a TDX schema including the 'type' keyword as an array", function() {
      const simple = {
        type: [
          {__tdxType: "string"},
        ],
      };
      const errs = [];
      const convert = schemaUtils.schemaToTDX(simple, errs);
      assert.equal(0, errs.length);
      assert.equal(convert.type[0].__tdxType[0], "string");
    });
  });
}());
