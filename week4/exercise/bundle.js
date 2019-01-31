(function () {
  'use strict';

  var tableModel = {
    peoples: [],
    addPeople: function(name, surname, age) {
      this.peoples.push({
        name: name,
        surname: surname,
        age: age
      });
    },
    getData: function(id) {
      let sorted = [];

      for (let people of this.peoples) {
        if (!sorted.includes(people[id])) {
          sorted.push(people[id]);
        }
      }

      return sorted
    }
  };

  var tableRow = {
    render: function() {
      const row = document.createElement("tr");

      return row
    }
  };

  var tableTh = {
    render: function(key) {
      const th = document.createElement("th");
      th.textContent = key;
      th.style.textTransform = "capitalize";

      return th;
    }
  };

  var tableHead = {
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

  var td = {
    render: function(value) {
      const td = document.createElement("td");
      td.textContent = value;

      return td;
    }
  };

  var tableBody = {
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

  var tableView = {
    render: function(peoples) {
      const keys = ["name", "surname", "age"];

      const table = document.createElement("table");
      table.appendChild(tableHead.render(keys));
      table.appendChild(tableBody.render(peoples, keys));

      return table;
    }
  };

  var searchView = {
    render: function(peoples, el) {
      let defaultOption = document.createElement("option");
      defaultOption.textContent = "--No filter--";

      el.appendChild(defaultOption);

      for (let people of peoples) {
        let option = document.createElement("option");
        option.style.textTransform = "capitalize";
        option.textContent = people;
        el.appendChild(option);
      }
    }
  };

  var search = {
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

  const form = document.querySelector("form");
  const tableViewer = document.querySelector(".table-view");

  search.render();

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector(".name");
    const surname = document.querySelector(".surname");
    const age = document.querySelector(".age");

    // Skapa människa
    tableModel.addPeople(name.value, surname.value, age.value);

    search.render();
    name.value = "";
    surname.value = "";
    age.value = "";
  });

}());
