// ES5

var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  // console.log(colors[i]);
}

// ES6

colors.forEach(function(color) {
  // console.log(color);
});

// Continued

// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];
// Create a variable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
  sum += number;
});

// Print the sum
console.log(sum);

// function adder(number) {
//   sum += number;
// }

// numbers.forEach(adder);
