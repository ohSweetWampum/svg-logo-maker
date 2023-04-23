// Need to import the shape class
const shapes = require('./shapes');


class circle extends shapes {
    constructor(textColor,shapeColor, characters) {
        super(textColor, shapeColor, characters);
  }

  render() {
    // circle specific rendering logic here
  }
}
  
  
  module.exports = circle;