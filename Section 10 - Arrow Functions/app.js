// fat arrow functions

// ES5

const add1 = function(a, b) {
  return a + b;
}

// add1(1, 2);

// ES6

const add2 = (a, b) => {  // const add = (a, b) => a + b;
  return a + b;
}

// add2(1, 2);

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
    //this === team
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

console.log(team.teamSummary());
