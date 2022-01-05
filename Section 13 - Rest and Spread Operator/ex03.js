// mixing rest and spread

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

// refactor

function unshift(array, ...items) {
  return [ ...items, ...array ];
}
