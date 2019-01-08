const assert = require("assert");
const script = require('../script.js');
const getRandomNumberInIntervalAsPromise = script.getRandomNumberInIntervalAsPromise;
const getRandomNumberInIntervalAsCallback = script.getRandomNumberInIntervalAsCallback;

/* Add test here */
describe("Promise test", function() {
  it("works", function() {
    return getRandomNumberInIntervalAsPromise(2, 6).then(function(data) {
      assert.ok(data);
    });
  });
});

describe("Callback test", function() {
  it("works", function(done) {
    getRandomNumberInIntervalAsCallback(2, 6, function(data) {
      assert.ok(data);
      done();
    });
  })
});