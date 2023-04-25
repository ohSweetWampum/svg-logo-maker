import { describe, test } from 'jest';


import Circle from '../lib/circle';


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
    <circle x="50%" y="50%" cx="150" cy="100" rx="150" ry="100"  fill="red" />
      <text x="50%" y="50%" font-size="60" text-anchor="middle" fill="white">
        A
      </text>
    `;
  
    expect(circleInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

