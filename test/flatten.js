/**
 * Created by toby on 16/11/15.
 */

var flatten = require("../lib/flatten");
var assert = require("assert");

describe("Flatten", function() {
  describe("Simple", function() {
    it("correctly handles simple object", function() {
      var obj = { hello: "testing", world: 123 };
      var flattened = flatten(obj);
      debugger;
      assert.equal("testing", flattened["hello"]);
      assert.equal(123, flattened["world"]);
    });
  });

  describe("Complex", function() {
    it("correctly handles complex object", function() {
      var obj = { hello: "testing", world: { foo: 123 }, bar: { value: [1,2,3] } };
      var flattened = flatten(obj);
      debugger;
      assert.equal("testing", flattened["hello"]);
      assert.equal(123, flattened["world.foo"]);
      assert.equal(3, flattened["bar.value[2]"]);
    });
  });

});