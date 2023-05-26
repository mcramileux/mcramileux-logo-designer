// Function to generate the SVG logo
// Constructor Triangle, Circle, Square is imported
// Followed the Activity #11 - OOP

const { Circle, Square, Triangle } = require("./shapes");

// A testing suite for Shapes(Circle) is created.
describe('Shapes', () => {
    // A test is created to check that the shape circle will be rendered.
    describe('Circle', () => {
      it('should create circle svgLogo design', () => {
        const circle = new Circle('blue');
        expect(circle.color).toEqual(
          'blue'
            // <circle cx="100" cy="100" r="100" fill="red" />
        );
      });
    });
  });

//A testing suite for Shapes(Square) is created.
describe('Shapes', () => {
    // A test is created to check that the shape square will be rendered.
    describe('Square', () => {
      it('should create square svgLogo design', () => {
        const square = new Square('blue');
        expect(square.color).toEqual(
          'blue'
        // expect(square.render()).toEqual(
        //   <rect x="10" y="60" width="170" height="180" fill="yellow" />            
        // );
        );
      });
    });
  });

//A testing suite for Shapes(Triangle) is created.
describe('Shapes', () => {
    // A test is created to check that the shape triangle will be rendered.
    describe('Triangle', () => {
      it('should create triangle svgLogo design', () => {
        const triangle = new Triangle('blue');
        expect(triangle.color).toEqual(
          'blue'
        // expect(triangle.render()).toEqual(
        //   <polygon points="150, 30 250, 200 60, 200" fill="blue" />
        );
      });
    });
  });

//SAMPLE FROM THE MOCK UP
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />');
