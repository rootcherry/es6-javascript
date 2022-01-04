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
