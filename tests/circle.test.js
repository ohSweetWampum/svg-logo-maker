const { describe, test } = require('jest');

// Import the Circle class from the file where it is defined.
const Circle = require('../lib/circle.js');


// A test suite for the Circle class.
describe('Circle', () => {
    describe('Instantiate', () => {
  // A test case to check if the Circle class can be instantiated with the required parameters.
  test('should create a new Circle instance with the given parameters', () => {
    const circleInstance = new Circle('white', 'red', 'A');
    expect(circleInstance ).toBeInstanceOf(Circle);
    expect(circleInstance .textColor).toBe('white');
    expect(circleInstance .shapeColor).toBe('red');
    expect(circleInstance .characters).toBe('A');
  });
});
  // A test case to check if the Circle class can render a Circle with the given parameters.
  describe("renderSpecificShape()", () => {
  test('should render a Circle with the given parameters', () => {
    const circleInstance = new Circle('white', 'red', 'A');
    const expectedResult = `
    <rect x="0" y="0" width="300" height="200" fill="red" />
      <text x="125" y="150" font-size="24" text-anchor="middle" fill="white">
        A
      </text>
    `;
  
    expect(circleInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

