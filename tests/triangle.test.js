

// A test suite for the Triangle class.
const { describe, test } = require('jest');

// Import the Triangle class from the file where it is defined.
const Triangle = require('../lib/Triangle');


// A test suite for the Triangle class.
describe('Triangle', () => {
    describe('Instantiate', () => {
  // A test case to check if the Triangle class can be instantiated with the required parameters.
  test('should create a new Triangle instance with the given parameters', () => {
    const triangleInstance = new Triangle('white', 'red', 'A');
    expect(triangleInstance ).toBeInstanceOf(Triangle);
    expect(triangleInstance .textColor).toBe('white');
    expect(triangleInstance .shapeColor).toBe('red');
    expect(triangleInstance .characters).toBe('A');
  });
});
  // A test case to check if the Triangle class can render a Triangle with the given parameters.
  describe("renderSpecificShape()", () => {
  test('should render a Triangle with the given parameters', () => {
    const triangleInstance = new Triangle('white', 'red', 'A');
    const expectedResult = `
    <rect x="0" y="0" width="300" height="200" fill="red" />
      <text x="125" y="150" font-size="24" text-anchor="middle" fill="white">
        A
      </text>
    `;
  
    expect(triangleInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

