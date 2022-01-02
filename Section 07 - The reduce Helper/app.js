// condensing lists with reduce

var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
console.log("---");

var result = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(result);
