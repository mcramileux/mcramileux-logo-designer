// Calling inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Written path will be saved into ./examples
// const { join } = require('path');

// Importing the shapes in the folder ./lib/shapes
const { Circle, Square, Triangle } = require('./lib/shapes');

// Below are the array of questions
function promptQuestions (){
   inquirer
    .prompt([
    { 
      type: 'input',
      name: 'initials',
      message: 'Please enter up to three characters for your logo:',
    },
    { 
      type: 'input',
      name: 'textColor',
      message: 'Please enter a text color keyword (OR a hexadecimal number)',
    },
    { 
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter a shape color keyword (OR a hexadecimal number)',
    },
    { 
      type: 'list',
      name: 'shape',
      message: 'Which shape would you like to use ?',
      choices: ['circle', 'square', 'triangle'],
    },
  ])
  .then((answers) => {    
    console.log('Success! You have generated a logo.');

    let shape;
      let shapeColor = answers.shapeColor;
      if (answers.shape === 'circle') {
          shape = new Circle (shapeColor)
      }
      if (answers.shape === 'square') {
        shape = new Square (shapeColor)
      }
      if (answers.shape === 'triangle') {
          shape = new Triangle (shapeColor)
      }
    
      let svg = 
          `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
          ${shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" 
          fill="${answers.textColor}">${answers.initials}</text></svg>`
      fs.writeFileSync('./examples/logo.svg', svg);
  });

  //   if (answers.shape == "circle") {
  //     shape = new Circle(answers.shapeColor);
  //   }
  //   else if (answers.shape == "square") {
  //     shape = new Square(answers.shapeColor);
  //   }
  //   else if (answers.shape == "triangle") {
  //     shape = new Triangle(answers.shapeColor);
  //   }
  //    console.log(shape.render());
  //     //generating the logo and saving it into a folder
  //   writeFile('examples', svg.render)
  // })

  // .catch(error => {
  //   console.log(error);
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // })
};

// Function has been created to initialize app
// Followed the Mini-Project solved solution
  function init() {
    promptQuestions();
   };

// function call to initialize the application
init();