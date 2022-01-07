// introduction to classes

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

const car = new Car({ title: 'Focus' });

// console.log(car.drive());
// console.log(car);

// prototypal inheritance

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
// console.log('---');
// console.log(toyota);
// console.log(toyota.drive());
// console.log(toyota.honk());

// refactoring with classes

class Car2 {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

const car2 = new Car2({ title: 'Toyota' });
console.log(car2);
console.log(car2.drive());
