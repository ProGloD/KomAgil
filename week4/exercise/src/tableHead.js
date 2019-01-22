import tableRow from "./tableRow.js";
import tableTh from "./tableTh.js";

export default {
  render: function(keys) {
    const head = document.createElement("thead");
    const row = tableRow.render();

    for (let key of keys) {
      row.appendChild(tableTh.render(key));
    }

    head.appendChild(row);

    return head;
  }
};