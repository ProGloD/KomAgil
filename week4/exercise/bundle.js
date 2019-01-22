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

  var search = {
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

    // Återställa till default
    tableViewer.innerHTML = "";

    // Lägg till tabell
    tableViewer.appendChild(
      tableView.render(tableModel.peoples)
    );

    name.value = "";
    surname.value = "";
    age.value = "";
  });

}());
