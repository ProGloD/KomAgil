const assert = require('assert');
const Counter = require('../counter');

describe('Counter', function() {
  let counter = new Counter();


  // Write tests here
  afterEach(function() {
    counter.reset();
  });

  it("increase", function() {
    counter.increase();
    assert.equal(counter.getCount(), 1);
  });

  it("decrease", function() {
    counter.decrease();
    assert.equal(counter.getCount(), -1);
  });
});