
function PizzaStore() {
  this.pepperoni = { name: pepperoni }
}

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
};

Pizza.prototype.sizePrice = function() {
  if (this.size.includes("small")) {
    this.cost += 5;
  } else if (this.size.includes("medium")) {
    this.cost += 8;
  } else 
  this. cost += 12;
};



