// Function to generate the SVG file that will base on the following: text, shape-color, and text-color
// function triangle/square/circle = {} //functions for the shapes needs to return to html
// need to use classes, render - part of Acceptance Criteria
class Shape {
    constructor(color) { 
         this.color = 'color';
  };
}
class Circle extends Shape{
    render (){
        return <circle cx="50" cy="50" r="60" fill="${this.color}" />
    }
}
class Square extends Shape{
    render (){
        return <rect x="50" y="30" width="150" height="150" fill="${this.color}" />
    }
}
class Triangle extends Shape{
    render (){
        return <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.color}" />
    }
}
module.exports = {
    Circle,
    Square,
    Triangle
};

//The constructor method is a special method of a class for creating and initializing an object instance of that class.
// sample in MDN
// class Polygon {
//     constructor() {
//       this.name = 'Polygon';
//     }
//   }
  
//   const poly1 = new Polygon();
  