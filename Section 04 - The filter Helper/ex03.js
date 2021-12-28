// Challenging! Implementing 'reject'

var numbers = [10, 20, 30];

var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});

function reject(array, iteratorFn) {
  return array.filter(function(item) {
    return !iteratorFn(item);
  });
}
