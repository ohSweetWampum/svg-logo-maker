// Need to import the shape class
const shapes = require('./shapes');

// the triangle class inherits from shape class
class triangle extends shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  render() {
    // triangle-specific rendering logic here
  }
}

module.exports = triangle;