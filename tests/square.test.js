
const Square = require('../lib/square');




describe('Square', () => {
    describe('Instantiate', () => {
  
  test('should create a new Square instance with the given parameters', () => {
    const squareInstance = new Square('blue', 'pink', 'hey');
    expect(squareInstance ).toBeInstanceOf(Square);
    
    expect(squareInstance .shapeColor).toBe('pink');
   
  });
});

  describe("renderSpecificShape()", () => {
  test('should render a Square with the given parameters', () => {
    const squareInstance = new Square('blue', 'pink', 'hey');
    const expectedResult = `
    <rect  x="50" y="0" width="200" height="200" fill="pink"  />
      
    `;
  
    expect(squareInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

