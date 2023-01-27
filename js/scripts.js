

// Pizza Business Logic

function Pizza([topping1, topping2], small) {
  this.toppings = [topping1, topping2];
  this.size = small;
  this.cost = 0;
}

Pizza.prototype.toppingsPrice = function() {
  if (this.toppings.includes("pepperoni")) {
    this.cost += 2;
  }
  if (this.toppings.includes("pineapple")) {
    this.cost += 2;
  }
  if (this.toppings.includes("bacon")) {
    this.cost += 4;
  }
  if (this.toppings.includes("olives")) {
    this.cost += 1;
  }
  if (this.toppings.includes("anchovies")) {
    this.cost += 3;
  }
  if (this.toppings.includes("canadian-bacon")) {
    this.cost += 3;
  }
};

Pizza.prototype.sizePrice = function() {
  if (this.size.includes("small")) {
    this.cost += 5;
  } else if (this.size.includes("medium")) {
    this.cost += 8;
  } else 
  this.cost += 12;
};

Pizza.prototype.receipt = function() {
  let receipt = "Your " + this.size + " pizza with " + this.toppings[0] + " and " + this.toppings[1] + " comes to a total of $" + this.cost;
  return receipt;
};

// evalToppings Business Logic

function evalToppings(top1, top2, top3) {
  if (top1 !== 0) {
  topArray.push(top1);
  };
  if (top2 !== 0) {
    topArray.push(top2);
  };
  if (top3 !== 0) {
    topArray.push(top3);
  };
}



// UI Logic

function handleSubmit(event) {
  event.preventDefault();
  let inputName = document.getElementById("person1").value;
  let size = document.getElementById("select-pizza-size").value;
  let top1 = document.getElementById("topping1").value;
  let top2 = document.getElementById("topping2").value;
  let top3 = document.getElementById("topping3").value;
  let topArray = [];
  evalToppings(top1, top2, top3);
  let newPizza = new Pizza(topArray, size);
  newPizza.toppingsPrice();
  newPizza.sizePrice();

}


window.addEventListener("load", function() {
  const form = document.querySelector("form#pizza-form");
  form.addEventListener("submit", handleSubmit)
})

