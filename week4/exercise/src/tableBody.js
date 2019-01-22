import tableRow from "./tableRow";
import td from "./tableTd.js";

export default {
  render: function(peoples, keys) {
    const body = document.createElement("tbody");

    for (let people of peoples) {
      const row = tableRow.render();

      for (let key of keys) {
        row.appendChild(td.render(people[key]));
      }

      body.appendChild(row);
    }

    return body;
  }
};