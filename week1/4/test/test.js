const assert = require('assert');
const groupBy = require('../script.js');

describe("Function", function() {
  it("groupBy", function() {
    assert.deepStrictEqual(groupBy([1.3, 2.1, 2.4], function(num) {
      return Math.floor(num);
    }), {
      1: [1.3],
      2: [2.1, 2.4]
    });
    assert.deepStrictEqual(groupBy(['one', 'two', 'three'], function(str) {
      return str.length;
    }), {
      3: ["one", "two"],
      5: ["three"]
    });
  });
});