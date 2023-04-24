import { describe, test } from 'jest';


import Circle from '../lib/circle.mjs';


describe('Circle', () => {
    describe('Instantiate', () => {
 
  test('should create a new Circle instance with the given parameters', () => {
    const circleInstance = new Circle('blue', 'pink', 'hey');
    expect(circleInstance ).toBeInstanceOf(Circle);
    expect(circleInstance .textColor).toBe('blue');
    expect(circleInstance .shapeColor).toBe('pink');
    expect(circleInstance .characters).toBe('hey');
  });
});
  
  describe("renderSpecificShape()", () => {
  test('should render a Circle with the given parameters', () => {
    const circleInstance = new Circle('blue', 'pink', 'hey');
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

