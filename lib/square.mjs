import Shapes from './shapes.mjs';

class Square extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderSpecificShape() {
    return `<rect  x="50" y="0" width="200" height="200"   fill="${this.shapeColor}"  />`;
  }
  
}

module.exports = Square;

