// Need to import the shape class
import Shapes from './shapes.mjs';


class Triangle extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderSpecificShape() {
    return `<polygon x="50%" y="50%" points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
