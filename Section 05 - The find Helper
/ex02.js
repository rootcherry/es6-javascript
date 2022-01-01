// what's your balance?

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(acc) {
  return acc.balance === 12;
});
