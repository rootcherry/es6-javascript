// dumping unused code

function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}

// refactor

function addOffset2(style = {}) {
  style.offset = '10px';

  return style;
}
