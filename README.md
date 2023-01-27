### Describe Pizza()

Test: "It should create an object with two properties for topping and size."
Code: let createPizza = new Pizza(["pepperoni", "pineapple"], "small");
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "small"}

Test: "It should create an object with three properties for topping, size, and cost."
Code: let createPizza = new Pizza(["pepperoni", "pineapple"], "small");
Expected Output: 
Pizza { toppings: ["pepperoni", "pineapple"], size: "small", cost: 0}

### Describe Pizza.prototype.toppingsPrice()

Test: "It should increase this.cost of the Pizza object based on the toppings."
Code: createPizza.toppingsPrice();
      createPizza;
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "small", cost: 4}

### Describe Pizza.prototype.sizePrice()

Test: "It should increase this.cost of the Pizza object based on the size selected."
Code: createPizza.sizePrice();
      createPizza;
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "small", cost: 5}