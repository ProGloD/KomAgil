import tableModel from "./tableModel.js";
import tableView from "./tableView.js";
import searchView from "./searchView.js";

export default {
  render: function() {
    const tableViewer = document.querySelector(".table-view");

    // Återställa till default
    tableViewer.innerHTML = "";

    // Lägg till tabell
    tableViewer.appendChild(
      tableView.render(tableModel.peoples)
    );

    let search = document.querySelectorAll("select");

    for (let el of search) {
      let id = el.dataset.id;
      el.innerHTML = "";
      searchView.render(tableModel.getData(id), el);
      el.addEventListener("change", () => {
        tableViewer.innerHTML = "";

        if (el.value === "--No filter--") {
          tableViewer.appendChild(
            tableView.render(tableModel.peoples)
          );
        } else {
          const sorted = tableModel.peoples.filter(function(people) {
            return people[id].toLowerCase() === el.value.toLowerCase();
          });

          tableViewer.appendChild(
            tableView.render(sorted)
          );
        }
      });
    }
  }
};