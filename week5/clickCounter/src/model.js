export default {
  counter: 0,
  increase: function() {
    this.counter++;
  },
  decrease: function() {
    this.counter--;
  },
  getCounter: function() {
    return this.counter;
  }
};