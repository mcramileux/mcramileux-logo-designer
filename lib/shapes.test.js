// Function to generate the SVG logo
// Constructor Triangle, Circle, Square is imported
// Followed the Activity #11 - OOP
const { Circle, Square, Triangle } = require("./lib/shapes");

// A testing suite for Shapes(Circle) is created.
describe('Shapes', () => {
    // A test is created to check that the shape circle will be rendered.
    describe('Circle', () => {
      it('should create circle svgLogo design', () => {
        const circle = new Circle();
        expect(circle.render()).toEqual(
            <circle cx="100" cy="100" r="100" fill="${this.color}" />
        );
      });
    });
  });

// A testing suite for Shapes(Square) is created.
describe('Shapes', () => {
    // A test is created to check that the shape square will be rendered.
    describe('Square', () => {
      it('should create square svgLogo design', () => {
        const square = new Square();
        expect(square.render()).toEqual(
         <rect x="50" y="30" width="150" height="150" fill="${this.color}" />            
        );
      });
    });
  });

// A testing suite for Shapes(Triangle) is created.
describe('Shapes', () => {
    // A test is created to check that the shape triangle will be rendered.
    describe('Triangle', () => {
      it('should create triangle svgLogo design', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toEqual(
          <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.color}" />
        );
      });
    });
  });

//SAMPLE FROM THE MOCK UP
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />');
