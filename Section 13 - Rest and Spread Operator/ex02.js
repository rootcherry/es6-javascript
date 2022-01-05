// spreadin' arrays

function join(array1, array2) {
  return array1.concat(array2);
}

// refactor

function join(array1, array2) {
  return [ ...array1, ...array2 ];
}
