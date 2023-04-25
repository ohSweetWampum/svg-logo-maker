import { describe, test } from 'jest';



import Square from '../lib/square.mjs';



describe('Square', () => {
    describe('Instantiate', () => {
  
  test('should create a new Square instance with the given parameters', () => {
    const squareInstance = new Square('blue', 'pink', 'hey');
    expect(squareInstance ).toBeInstanceOf(Square);
    expect(squareInstance .textColor).toBe('blue');
    expect(squareInstance .shapeColor).toBe('pink');
    expect(squareInstance .characters).toBe('hey');
  });
});

  describe("renderSpecificShape()", () => {
  test('should render a Square with the given parameters', () => {
    const squareInstance = new Square('blue', 'pink', 'hey');
    const expectedResult = `
    <rect  x="50" y="0" width="200" height="200" fill="pink"  />
      <text x="50%" y="50%" font-size="60" text-anchor="middle" fill="blue">
        A
      </text>
    `;
  
    expect(squareInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

