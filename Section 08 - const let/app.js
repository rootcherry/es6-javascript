// variable declarations with const and let

// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

// ES6

const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// some time later...

title = 'Senior Software Engineer';
hourlyWage = 45;

// what const and let solve

function count(targetString) {
  var characters = ['a', 'e', 'i', 'o', 'u'];
  var number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }

  return number;
}

count('aeiobzxceiaipbiox');
