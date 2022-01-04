// specifying default function arguments

function makeAjaxRequest(url, method = 'GET') {
  // if (!method) {
  //   method = 'GET';
  // }
  return method;
  // logic to make request

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');
makeAjaxRequest('google.com', 'POST');

// use cases of defaulting arguments

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

// createAdminUser(new User(generateId()));

const user = new User(generateId());

createAdminUser();
createAdminUser(user);
