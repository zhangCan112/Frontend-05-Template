var assert = require("assert");
import {add , mul} from "../add"

describe("custom function testing", function () {
  describe("add function testing", function () {
    it("1 + 2 should return 3", function () {
      assert.strictEqual(add(1, 2), 3);
    });

    it("-5 + 2 should return -3", function () {
      assert.strictEqual(add(-5, 2), -3);
    });

    it("-5 * 2 should return -10", function () {
        assert.strictEqual(mul(-5, 2), -10);
    });
  });
});
