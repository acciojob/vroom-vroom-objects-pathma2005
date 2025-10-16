// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to set make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Fix the constructor reference
SportsCar.prototype.constructor = SportsCar;

// Add method specific to SportsCar
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
