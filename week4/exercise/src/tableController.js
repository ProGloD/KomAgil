import tableModel from "./tableModel.js";
import tableView from "./tableView.js";
import search from "./searchController.js";

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