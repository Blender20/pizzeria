function pizzaOven(crust, sauce, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crust;
  pizza.sauceType = sauce;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}
var firstPizza = pizzaOven('deep dish', 'marinara', 'feta',['pepperoni', ''])