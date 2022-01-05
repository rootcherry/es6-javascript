// capturing arguments with rest and spread

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// the rest on rest and spread

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// defaultColors.concat(userFavoriteColors);

// refactor

[ 'green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ];

// validate shopping list

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');
