// template strings

function getMessage() {
  const year = new Date().getFullYear();

  // return "The year is " + year;
  return `The year is ${year}`;
}

getMessage();

// when to reach for template strings
