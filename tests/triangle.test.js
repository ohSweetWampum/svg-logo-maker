



const Triangle = require('../lib/triangle');



describe('Triangle', () => {
    describe('Instantiate', () => {
 
  test('should create a new Triangle instance with the given parameters', () => {
    const triangleInstance = new Triangle('blue', 'pink', 'hey');
    expect(triangleInstance ).toBeInstanceOf(Triangle);
    
    expect(triangleInstance .shapeColor).toBe('pink');
    
  });
});
  
  describe("renderSpecificShape()", () => {
  test('should render a Triangle with the given parameters', () => {
    const triangleInstance = new Triangle('blue', 'pink', 'hey');
    const expectedResult = `
    <polygon x="50%" y="50%" points="150, 18 244, 182 56, 182" fill="pink" />
      
    `;
  
    expect(triangleInstance.renderSpecificShape().replace(/\s+/g, '')).toBe(expectedResult.replace(/\s+/g, ''));
  });
});
});

