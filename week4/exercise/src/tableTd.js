export default {
  render: function(value) {
    const td = document.createElement("td");
    td.textContent = value;

    return td;
  }
};