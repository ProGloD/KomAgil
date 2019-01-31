export default {
  render: () => {
    let body = document.body;

    let text = document.createElement("h1");
    body.appendChild(text);

    let increase = document.createElement("button");
    increase.id = "increase";
    increase.textContent = "+1";
    body.appendChild(increase);

    let decrease = document.createElement("button");
    decrease.id = "decrease";
    decrease.textContent = "-1";
    body.appendChild(decrease);
  },
  update: (num) => {
    document.querySelector("h1").textContent = num;
  }
};