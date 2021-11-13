// ES5
var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// console.log(doubledNumbers);

// ES6
let doubled = numbers.map(function(number) {
  return number * 2;
});

// console.log(doubled);

// The map helper continued
var cars = [
  { model: 'Buick', price: 'CHEAP'},
  { model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);

