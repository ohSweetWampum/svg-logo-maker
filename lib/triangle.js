// Need to import the shape class
const Shapes = require('./shapes.js');


//constructor class
class Triangle extends Shapes {
  constructor(textColor, shapeColor, characters) {
    super(textColor, shapeColor, characters);
  }

  renderSpecificShape() {
    return `<polygon x="50%" y="50%" points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}
// Export  Triangle class to other modules
module.exports = Triangle;
