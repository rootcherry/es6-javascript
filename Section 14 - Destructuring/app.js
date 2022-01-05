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

const firstCompany = companies[0];
