
const Shapes = require('./shapes.js');


class Square extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderSpecificShape() {
    return `<rect  x="50" y="0" width="200" height="200"   fill="${this.shapeColor}"  />`;
  }
  
}
// Export   class to other modules
module.exports = Square;

