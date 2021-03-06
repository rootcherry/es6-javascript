// Handling permissions with filter

var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];

var filteredUsers = users.filter((user) => {
  return user.admin === true;
});

console.log(filteredUsers);
