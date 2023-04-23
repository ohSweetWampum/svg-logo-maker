// Need to import the shape class
const Shapes = require('./shapes');

class Circle extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderShape() {
    return `<ellipse cx="150" cy="100" rx="150" ry="100" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
