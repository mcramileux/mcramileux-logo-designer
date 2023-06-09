// Calling inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

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
    { 
      type: 'input',
      name: 'fileName',
      message: 'Please enter a file name.',
    },
  ])
  .then((answers) => {    
    console.log('Success! You have generated a logo.');

    let shape;
      let shapeColor = answers.shapeColor;
      if (answers.shape === 'circle') {
          shape = new Circle (shapeColor)

        // Edited the x's and y's so that the text will be in the middle and inside the shape
        let svg = 
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${shape.render()}<text x="100" y="115" font-size="50" text-anchor="middle" 
        fill="${answers.textColor}">${answers.initials}</text></svg>`
        fs.writeFileSync(`./examples/${answers.fileName}.svg`, svg);
      }

      if (answers.shape === 'square') {
        shape = new Square (shapeColor)

        // Edited the x's and y's so that the text will be in the middle and inside the shape
        let svg = 
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${shape.render()}<text x="90" y="145" font-size="50" text-anchor="middle" 
        fill="${answers.textColor}">${answers.initials}</text></svg>`
        fs.writeFileSync(`./examples/${answers.fileName}.svg`, svg);
      }

      if (answers.shape === 'triangle') {
          shape = new Triangle (shapeColor)

        // Edited the x's and y's so that the text will be in the middle and inside the shape
        let svg = 
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${shape.render()}<text x="150" y="160" font-size="50" text-anchor="middle" 
        fill="${answers.textColor}">${answers.initials}</text></svg>`
        fs.writeFileSync(`./examples/${answers.fileName}.svg`, svg);
      }
  });
};

// Function has been created to initialize app
// Followed the Mini-Project solved solution
  function init() {
    promptQuestions();
   };

// function call to initialize the application
init();