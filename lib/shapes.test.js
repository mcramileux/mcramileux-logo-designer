// Function to generate the SVG logo
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

//SAMPLE FROM THE MOCK UP
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />');
