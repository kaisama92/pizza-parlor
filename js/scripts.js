

// Pizza Business Logic

function Pizza(small) {
  this.toppings = [];
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
  let receipt;
  if (this.toppings.length === 0) {
    receipt = this.name + "! Your " + this.size + " cheese pizza comes to a total of $" + this.cost;
    return receipt;
  } else
  receipt = this.name + "! Your " + this.size + " pizza with " + this.toppings[0] + ", " + this.toppings[1] + ", and " + this.toppings[2] +  " comes to a total of $" + this.cost;
  return receipt;
};

// evalToppings Business Logic

function evalToppings(top1, top2, top3) {
  let evalArray = [];
  console.log(top1 + top2 + top3);
  if (top1 !== "0") {
    evalArray.push(top1);
  };
  if (top2 !== "0") {
    evalArray.push(top2);
  };
  if (top3 !== "0") {
    evalArray.push(top3);
  };
  return evalArray;
}

// UI Logic

function handleSubmit(event) {
  event.preventDefault();
  let size = document.getElementById("select-pizza-size").value;
  let top1 = document.getElementById("topping1").value;
  console.log(top1);
  let top2 = document.getElementById("topping2").value;
  console.log(top2);
  let top3 = document.getElementById("topping3").value;
  console.log(top3);
  let newPizza = new Pizza(size);
  newPizza.toppings = evalToppings(top1, top2, top3);
  console.log(newPizza);
  newPizza.name = document.getElementById("person1").value;
  newPizza.toppingsPrice();
  newPizza.sizePrice();
  let p = document.createElement("p");
  let receiptDiv = document.createElement("div.receipt");
  let body = document.querySelector("body");
  p.append(newPizza.receipt());
  receiptDiv.append(p);
  body.append(receiptDiv);
  
  


}


window.addEventListener("load", function() {
  const form = document.querySelector("form#pizza-form");
  form.addEventListener("submit", handleSubmit)
})

