(function () {
  'use strict';

  var model = {
    counter: 0,
    increase: function() {
      this.counter++;
    },
    decrease: function() {
      this.counter--;
    },
    getCounter: function() {
      return this.counter;
    }
  };

  var view = {
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

}());
