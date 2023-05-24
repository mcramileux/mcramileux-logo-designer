// Function to generate the SVG file that will base on the following: text, shape-color, and text-color
// function triangle/square/circle = {} //functions for the shapes needs to return to html
// need to use classes, render - part of Acceptance Criteria

// Create a class for shapes for the logo (Activity #10 in OOP)
class Shape{
    constructor(color) { 
         this.color = 'color';
  };
}

// Setup Circle, Square, and Triangle so they inherit their structure from Shape
class Circle extends Shape{
    render (){
        return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`;
    }
}
class Square extends Shape{
    render (){
        return `<rect x="40" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}
class Triangle extends Shape{
    render (){
        return `<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.color}" />`;
    }
}
// Export the shapes to index files and shape.test.js
module.exports = { Circle, Square, Triangle };