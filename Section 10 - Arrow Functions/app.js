// fat arrow functions

// ES5

const add = function(a, b) {
  return a + b;
}

add(1, 2);

// ES6

const add = (a, b) => {  // const add = (a, b) => a + b;
  return a + b;
}

add(1, 2);

// advanced use of arrow functions

const double = function(number) { // const double = number => 2 * number;
  return 2 * number;
};

const numbers = [1, 2, 3];

numbers.map(number => 2 * number);

// when to use arrow functions

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
