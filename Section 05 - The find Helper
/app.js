// Querying for records with find

var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

// var user;
// for (var i = 0; i < users.length; i++) {
//   if (users[i].name === 'Alex') {
//     user = users[i];
//     break;
//   }
// }

// console.log(user);

// refactor

const result = users.find(function(user) {
  return user.name === 'Alex';
});

console.log(result);
