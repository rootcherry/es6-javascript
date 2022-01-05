// ES5

var expense = {
  type: 'Business',
  amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6

// const { type } = expense;
// const { amount } = expense;

const { type, amount } = expense;

// destructuring arguments object

// ES5

var saveFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(saveFiled);

// ES6

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

// destructuring arrays

const companies = [
  'Google',
  'Twitter',
  'Instagram'
];

const [ name ] = companies;
const [ name, ...rest ] = companies;

const firstCompany = companies[0];

// destructuring arrays and objects at the same time

const companies2 = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

// ES5

// var location = companies[0].location; // google location?

// ES6

// const [{ location }] = companies2;

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;

// when to use destructuring?

function signup({ username, password, email, dateOfBirth, city }) {
  // create new user

}

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
};  

signup(user);

// more on when to use destructuring

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// [
//   { x: 4, y: 5 },
//   { x: 10, y: 1 },
//   { x: 0, y: 40 }
// ];

points.map(([ x, y ]) => {
  return { x, y };
});
