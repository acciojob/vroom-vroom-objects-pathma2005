// Complete the js code
function makeChange(amount) {
  let change = {};

  // Calculate quarters
  change.q = Math.floor(amount / 25);
  amount = amount % 25;

  // Calculate dimes
  change.d = Math.floor(amount / 10);
  amount = amount % 10;

  // Calculate nickels
  change.n = Math.floor(amount / 5);
  amount = amount % 5;

  // Remaining are pennies
  change.p = amount;

  return change;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
