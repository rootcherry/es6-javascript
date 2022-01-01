// a little every and a lot of some

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

// console.log("---");
// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);
// console.log("+++");

var eve = computers.every(function(computer) {
  return computer.ram > 16;
});

// console.log(eve);

var som = computers.some(function(computer) {
  return computer.ram > 16;
});

// console.log(som);

// every and some syntax

var names = ["Alexandria", "Matthew", "Joe"];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});
