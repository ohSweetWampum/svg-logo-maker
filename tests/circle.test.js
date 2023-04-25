
const Circle = require('../lib/circle');



describe('Circle', () => {
    describe('Instantiate', () => {
 
  test('should create a new Circle instance with the given parameters', () => {
    const circleInstance = new Circle('blue', 'pink', 'hey');
    expect(circleInstance ).toBeInstanceOf(Circle);
    
    expect(circleInstance .shapeColor).toBe('pink');
   
  });
});
  
  describe("renderSpecificShape()", () => {
  test('should render a Circle with the given parameters', () => {
    const circleInstance = new Circle('blue', 'pink', 'hey');
    const expectedResult = `
    <circle x="50%" y="50%" cx="150" cy="100" rx="150" ry="100"  fill="pink" />
    
    `;
  
    expect(circleInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

