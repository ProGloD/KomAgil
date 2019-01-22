import tableHead from "./tableHead.js";
import tableBody from "./tableBody.js";

export default {
  render: function(peoples) {
    const keys = ["name", "surname", "age"];

    const table = document.createElement("table");
    table.appendChild(tableHead.render(keys))
    table.appendChild(tableBody.render(peoples, keys));

    return table;
  }
};