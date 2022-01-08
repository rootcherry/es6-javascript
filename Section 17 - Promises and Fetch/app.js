// async code with promises

let promise = new Promise((resolve, reject) => {
  var request = new XMLHttpRequest()
  // make request
  request.onload = () => {
    resolve();
  };
});


promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('i was also ran!!!'))
  .catch(() => console.log('uh oh!!'));

// ajax requests with fetch

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  // .then(data => console.log(data))
  .then(response => response.json())
  .then(data => console.log(data));
