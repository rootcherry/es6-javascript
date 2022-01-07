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

// extending behavior of classes

class Toyota2 extends Car2 {
  constructor(options) {
    super(options); // Car2.constructor();
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota2 = new Toyota2({ color: 'red', title: 'Daily Driver' });
console.log('---');
console.log(toyota2.honk());
console.log(toyota2.drive());
console.log(toyota2);

// when to use classes

React.createClass({
  doSomething() {

  },

  doSomethingElse() {

  }
});

class MyComponent extends Component {
  doSomething() {

  }

  doSomethingElse() {

  }
}
