import tableModel from "./tableModel.js";
import tableView from "./tableView.js";

export default {
  render: function() {
    const form = document.querySelector(".search");
    const tableViewer = document.querySelector(".table-view");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const search = document.querySelector(".search__input");

      // Återställa till default
      tableViewer.innerHTML = "";

      if (!search.value) {
        tableViewer.appendChild(
          tableView.render(tableModel.peoples)
        );
      } else {
        const sorted = tableModel.peoples.filter(function(people) {
          return people.name === search.value;
        });

        tableViewer.appendChild(
          tableView.render(sorted)
        );
      }

    });
  }
};