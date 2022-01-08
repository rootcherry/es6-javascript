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

