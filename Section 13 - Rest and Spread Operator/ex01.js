// many many arguments

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// refactor using rest

function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
}
