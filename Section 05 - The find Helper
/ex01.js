// find the user whos is an admin. assign this user to the var 'admin'

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
  return user.admin === 'true';
});
