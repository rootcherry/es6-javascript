// Processing values

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

// create variable area
var area =  0;

// calculate the are of each image
images.forEach(function(image){
    area = image.height * image.width;
    // store result in a new array
    areas.push(area);
});

console.log(areas);
