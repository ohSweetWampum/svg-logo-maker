

// A test suite for the Triangle class.
const { describe, test } = require('jest');


// Import the Triangle class from the file where it is defined.
// Import the Circle class from the file where it is defined.
const Circle = require('../lib/circle');


// A test suite for the Circle class.
describe('Circle', () => {
    describe('Instantiate', () => {
  // A test case to check if the Circle class can be instantiated with the required parameters.
  test('should create a new Circle instance with the given parameters', () => {
    const circle = new Circle('white', 'red', 'A');
    expect(circle).toBeInstanceOf(Circle);
    expect(circle.textColor).toBe('white');
    expect(circle.shapeColor).toBe('red');
    expect(circle.characters).toBe('A');
  });
});
  // A test case to check if the Circle class can render a circle with the given parameters.
  describe("renderSpecificShape()", () => {
  test('should render a circle with the given parameters', () => {
    const circle = new Circle('white', 'red', 'A');
    const expectedResult = `
    <ellipse cx="150" cy="100" rx="150" ry="100"  fill="red" />
      <text x="125" y="150" font-size="24" text-anchor="middle" fill="white">
        A
      </text>
    `;
  
    expect(circle.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});
