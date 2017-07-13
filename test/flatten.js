/* global describe it */
module.exports = (function() {
  const utils = require("../lib/nqm-core-utils");
  const flatten = utils.flattenJSON;
  const assert = require("assert");

  describe("Flatten", function() {
    describe("Simple", function() {
      it("correctly handles simple object", function() {
        const obj = {hello: "testing", world: 123};
        const flattened = flatten(obj);
        assert.equal("testing", flattened.hello);
        assert.equal(123, flattened.world);
      });
    });

    describe("Complex", function() {
      it("correctly handles complex object", function() {
        const obj = {hello: "testing", world: {foo: 123}, bar: {value: [1, 2, 3]}};
        const flattened = flatten(obj);
        assert.equal("testing", flattened.hello);
        assert.equal(123, flattened["world.foo"]);
        assert.equal(3, flattened["bar.value.2"]);
      });
    });
  });
}());
