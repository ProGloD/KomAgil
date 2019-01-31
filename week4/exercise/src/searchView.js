export default {
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
}