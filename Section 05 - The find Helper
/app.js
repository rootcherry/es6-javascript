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

// console.log(result);

// find continued

function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});

// posts example

var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

// console.log(postForComment(posts, comment));

// Using find to search for users

const posts = [
  { id: 1, title: 'Post title'},
  { id: 2, title: 'Post title'},
  { id: 3, title: 'Post title'},
  { id: 4, title: 'Post title'},
  { id: 5, title: 'Post title'},
  { id: 6, title: 'Post title'}
];

const postId = getIdFromURL();

posts.find(post => post.id === postId);
