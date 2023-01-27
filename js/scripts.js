function Pizza([topping1, topping2], small) {
  this.toppings = [topping1, topping2];
  this.size = small;
  this.cost = 0;
}

Pizza.prototype.price = function() {
  this.toppings.forEach(function(element) {
    if (element.toLowerCase() = "pepperoni"){
      this.cost += 2;
    } else if (element.toLowerCase() = "bacon") {
      this.cost += 4;
    } else 
    this.cost += 1;
    
  })
}
