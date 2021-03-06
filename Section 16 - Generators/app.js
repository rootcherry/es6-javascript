// for of loops

// const colors = ['red', 'green', 'blue'];

// for (let color of colors) {
  // console.log(color);
// }

// const numbers = [1, 2, 3, 4];

// let total = 0;

// for (let number of numbers) {
//   total += number;
// }

// console.log(total);

// introduction to generators

// function* numbers() {
//   yield;
// }

// const gen = numbers();
// gen.next();
// gen.next();


// generators with a short story

// function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash

  // const stuffFromStore = yield 'cash';

  // walking to laundry place

  // const cleanClothes = yield 'laundry';

  // walking back home

  // return [ stuffFromStore, cleanClothes ];
// }

// stuff in the store

// const gen = shopping();
// gen.next(); // leaving our house
// walked into the store
// walking up and down the aisles...
// purchase our stuff

// gen.next('groceries'); // leaving the store with groceries
// gen.next('clean clothes');

// the big reveal on ES6 generators

function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];

for (let color of colors()) {
  myColors.push(color);
}

// console.log(myColors);

// a pratical use of ES6 generators

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];

for (let name of engineeringTeam) {
  names.push(name);
}

// console.log(names);

// generators with recursion

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child; 
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);
// console.log(tree);

const values = [];

for (let value of tree) {
  values.push(value);
}

console.log(values);
