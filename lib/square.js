// Need to import the shape class
const shapes = require('./shapes');


class square extends shapes{
    constructor(textColor,shapeColor, characters) {
        super(textColor, shapeColor, characters);
  }

  render() {
    // square-specific rendering logic here
  }
}
  module.exports = square;