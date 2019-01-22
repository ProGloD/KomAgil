import tableModel from "./tableModel.js";
import tableView from "./tableView.js";

const form = document.querySelector("form");
const tableViewer = document.querySelector(".table-view");

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