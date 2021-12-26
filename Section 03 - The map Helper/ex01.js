// Plucking values

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

// create a new array using map and assign to heights
heights = images.map(function(image) {
  return image.height;
});
