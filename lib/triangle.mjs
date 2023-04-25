// Need to import the shape class
import Shapes from './shapes.mjs';


class Triangle extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderSpecificShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
