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

console.log("---");
console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);
console.log("+++");

var ev = computers.every(function(computer) {
  return computer.ram > 16;
});

console.log(ev);
