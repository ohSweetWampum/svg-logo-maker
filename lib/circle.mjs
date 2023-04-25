// Need to import the shape class
import Shapes from './shapes.mjs';


class Circle extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderShape() {
    return `<circle x="50%" y="50%" cx="150" cy="100" rx="150" ry="100" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
