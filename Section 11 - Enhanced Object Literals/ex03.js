// literals in functions

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}

// refactor

const canvasDimensions1 = (width, initialHeight) => {
  const height = initialHeight * 9 / 16;
  return {
    width,
    height
  };
}
