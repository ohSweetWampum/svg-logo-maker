


import { describe, test } from 'jest';



import Triangle from '../lib/triangle.mjs';


describe('Triangle', () => {
    describe('Instantiate', () => {
 
  test('should create a new Triangle instance with the given parameters', () => {
    const triangleInstance = new Triangle('blue', 'pink', 'hey');
    expect(triangleInstance ).toBeInstanceOf(Triangle);
    expect(triangleInstance .textColor).toBe('blue');
    expect(triangleInstance .shapeColor).toBe('pink');
    expect(triangleInstance .characters).toBe('hey');
  });
});
  
  describe("renderSpecificShape()", () => {
  test('should render a Triangle with the given parameters', () => {
    const triangleInstance = new Triangle('blue', 'pink', 'hey');
    const expectedResult = `
    <polygon points="150, 18 244, 182 56, 182" fill="red" />
      <text x="200" y="160" font-size="24" text-anchor="middle" fill="white">
        A
      </text>
    `;
  
    expect(triangleInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

