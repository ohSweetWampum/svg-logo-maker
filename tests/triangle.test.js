

// A test suite for the Triangle class.
const { describe, test } = require('jest');


// Import the Triangle class from the file where it is defined.
const Triangle = require('../lib/Triangle');






// A test suite for the Square class.
describe('Square', () => {
    describe('Instantiate', () => {
  // A test case to check if the Square class can be instantiated with the required parameters.
  test('should create a new Square instance with the given parameters', () => {
    const Square = new Square('white', 'red', 'A');
    expect(Square).toBeInstanceOf(Square);
    expect(Square.textColor).toBe('white');
    expect(Square.shapeColor).toBe('red');
    expect(Square.characters).toBe('A');
  });
});
  // A test case to check if the Square class can render a Square with the given parameters.
  describe("renderSpecificShape()", () => {
  test('should render a Square with the given parameters', () => {
    const Square = new Square('white', 'red', 'A');
    const expectedResult = `
    <ellipse cx="150" cy="100" rx="150" ry="100"  fill="red" />
      <text x="125" y="150" font-size="24" text-anchor="middle" fill="white">
        A
      </text>
    `;
  
    expect(Square.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});
