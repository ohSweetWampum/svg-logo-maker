// Need to import the shape class
import Shapes from './shapes.mjs';


class Triangle extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderSpecificShape() {
    return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
