// hardmode: custom 'unique' helper

var numbers = [1, 1, 2, 3, 4, 4]; // remove all duplicate values [1, 2, 3, 4];

function unique(arr) {
  return arr.reduce(function(previous, item) {
    if (!previous.find(function(temp) {
      return temp === item;
    })) {
      previous.push(item);
    }
  }, []);
}
