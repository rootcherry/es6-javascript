// Implementing 'Pluck'

function pluck(arr, str) {
  let output = arr.map(function(obj) {
    return obj[str];
  });
  return output;
}
