function fullName(firstName, lastName) {
  return firstName + lastName;
}

// refactor the fn to use template strings

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
