const { describe, test } = require('jest');

// Import the Square class from the file where it is defined.
const Square = require('../lib/Square');


// A test suite for the Square class.
describe('Square', () => {
    describe('Instantiate', () => {
  // A test case to check if the Square class can be instantiated with the required parameters.
  test('should create a new Square instance with the given parameters', () => {
    const squareInstance = new Square('white', 'red', 'A');
    expect(squareInstance ).toBeInstanceOf(Square);
    expect(squareInstance .textColor).toBe('white');
    expect(squareInstance .shapeColor).toBe('red');
    expect(squareInstance .characters).toBe('A');
  });
});
  // A test case to check if the Square class can render a Square with the given parameters.
  describe("renderSpecificShape()", () => {
  test('should render a Square with the given parameters', () => {
    const squareInstance = new Square('white', 'red', 'A');
    const expectedResult = `
    <rect x="0" y="0" width="300" height="200" fill="red" />
      <text x="125" y="150" font-size="24" text-anchor="middle" fill="white">
        A
      </text>
    `;
  
    expect(squareInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

