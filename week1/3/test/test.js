const assert = require('assert');
const Counter = require('../counter');

describe('Counter', function() {
  let counter = new Counter();


  // Write tests here
  beforeEach(function() {
    counter.reset();
  });

  it("increase", function() {
    assert.strictEqual(counter.getCount(), 0);
    counter.increase();
    assert.strictEqual(counter.getCount(), 1);
  });

  it("decrease", function() {
    assert.strictEqual(counter.getCount(), 0);
    counter.decrease();
    assert.strictEqual(counter.getCount(), -1);
  });
});