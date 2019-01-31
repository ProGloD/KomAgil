import model from "./model.js";
import view from "./view.js";

view.render();
view.update(model.getCounter());

document.querySelector("#increase").addEventListener("click", () => {
  model.increase();
  view.update(model.getCounter());
});

document.querySelector("#decrease").addEventListener("click", () => {
  model.decrease();
  view.update(model.getCounter());
});