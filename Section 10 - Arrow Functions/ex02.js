// arrow functions aren't always a solution

const profile = {
  name: 'Alex'
};

const profile2 = {
  name: 'Alex',
  getName: function() {
    return this.name;
  }
};
