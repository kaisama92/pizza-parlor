# _pizza-parlor_

#### By _Kai Clausen_

#### _This application takes your pizza order and returns it to you with the price of the pizza._

## Technologies Used

* _HTML_
* _JavaScript_ 
* _CSS_
* _Bootstrap_

## Description

_This application utilizes constructors and prototypes to create a webpage that takes your order and returns it to you with a price based upon what you chose._ 

### Describe Pizza()

Test: "It should create an object with two properties for topping and size."
Code: let createPizza = new Pizza(["pepperoni", "pineapple"], "small");
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "small"}

Test: "It should create an object with three properties for topping, size, and cost."
Code: let createPizza = new Pizza(["pepperoni", "pineapple"], "small");
Expected Output: 
Pizza { toppings: ["pepperoni", "pineapple"], size: "small", cost: 0}

Test: "If no toppings were selected it should take just one item/array as it's toppings value."
const topArray = [];
Code: let myPizza = new Pizza(topArray, "small");
Expected Output = Pizza { toppings: [], size: "small", cost: 0}

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

### Describe Pizza.prototype.receipt()

Test: "It should return a statement that gives the size of the pizza, the toppings, and the cost. 
Code: createPizza.toppingsPrice();
      createPizza.sizePrice();
      createPizza.receipt();
Expected Output: "Your small pizza with pepperoni and pineapple comes to a total of $9

Test: "It should return a separate statement if no toppings were chosen."
const topArray = [];
Code: let myPizza = newPizza(topArray, "small");
      myPizza.receipt;
Expected Output: "Your small cheese pizza comes to a total of $5"

Test: "It should return a separate statement if 1 topping was chosen."
let myPizza = new Pizza { toppings: ["pepperoni"], size: "small",...}
Code: myPizza.receipt();
Expected Output: "this.name! Your small pizza with pepperoni comes to a total of $7" 

Test: "It should return a separate statement if 2 toppings were chosen."
let myPizza = new Pizza { toppings: ["pepperoni", "bacon"], size: "small",...}
Code: myPizza.receipt();
Expected Output: "this.name! Your small pizza with pepperoni and bacon comes to a total of $11"

### Describe evalToppings()

Test: "It should only add a topping if a topping was selected."

Code: let topArray = [];
      evalToppings(0, "bacon", "pineapple");
Expected Output: topArray = ["bacon", "pineapple"]

## Setup/Installation 

* _Clone this repository to you desktop_
* _Navigate to the top directory_
* _Open index.html in your preferred web browser_
* _Interact with the web page_

## Known Bugs

* _Entering new information and hitting submit does not clear the previous result._ 

## License

MIT - Should you come across any problems, feel free to fix them yourself, or contact me at kaiclausen123@gmail.com

Copyright (c) _2023_ _Kai Clausen_