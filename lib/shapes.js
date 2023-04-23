
class Shapes {
    constructor(textColor, shapeColor, characters) {
      this.textColor = textColor;
      this.shapeColor = shapeColor;
      this.characters = characters;
    }


    renderSpecificShape() {
        throw new Error('renderSpecificShape() must be implemented in a subclass.');
      }
  
    renderLogo() {
      return `
        <text x="125" y="150" font-size="24" text-anchor="middle" fill="${this.textColor}">
          ${this.characters}
        </text>
        
      `;
    }
  }
  
  module.exports = Shapes;
  