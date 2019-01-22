export default {
  render: function(key) {
    const th = document.createElement("th");
    th.textContent = key;
    th.style.textTransform = "capitalize";

    return th;
  }
};