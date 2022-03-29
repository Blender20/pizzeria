function pizzaOven(crust, sauce, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crust;
  pizza.sauceType = sauce;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}
var firstPizza = pizzaOven('deep dish', 'marinara', 'feta',['pepperoni', 'sausage'])
console.log(firstPizza);

var secondPizza = pizzaOven('hand tossed', 'white', 'mozzerella', ['sausage', 'pepperoni'])
console.log(secondPizza);

var thirdPizza = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'onions'])