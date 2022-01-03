// refactoring keyword functions

const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacci2 = n => {
  if (n < 3) return 1;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}
