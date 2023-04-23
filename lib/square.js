const Shapes = require('./shapes');

class Square extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderSpecificShape() {
    return `<rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}"  />`;
  }
}

module.exports = Square;

