// custom findwhere helper
// findWhere(ladders, { height: '20 feet' });
// { ladders: '20 feet' }

var ladders = [
  { id: 1, height: 20},
  { id: 3, height: 25}
];

function findWhere(element, criteria) {
  var result = element.find(function(el) {
    return el[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]];
  });
  return result;
}


findWhere(ladders, { height: 25 }); // result: { id: 3, height: 25 }

