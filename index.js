// Calling inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs/promises');

// Written path will be saved into ./examples
const { join } = require('path');

// Importing the shapes in the folder ./lib/shapes
const { generatedLogo } = require('./lib/shapes');

// Below are the array of questions
function promptQuestions (){
  return inquirer
    .prompt([
    { 
      type: 'input',
      name: 'initials',
      message: 'Please enter up to three characters for your logo:',
    },
    { 
      type: 'list',
      name: 'textColor',
      message: 'Please enter a text color keyword (OR a hexadecimal number)',
      // choices: ['white', 'black', 'gray', 'brown'],
    },
    { 
      type: 'list',
      name: 'shapeColor',
      message: 'Please enter a shape color keyword (OR a hexadecimal number)',
      // choices: ['blue', 'red', 'purple', 'pink'],
    },
    { 
      type: 'list',
      name: 'shape',
      message: 'Which shape would you like to use ?',
      choices: ['circle', 'square', 'triangle'],
    },
  ])
};

// Function has been created to initialize app
// Followed the Mini-Project solved solution
  function init() {
    promptQuestions()
        .then((answers) => {
          console.log(answers);
      });
      
      const svgMaker = generatedLogo(answers);
        console.log(svgMaker);

    return writeFile(
      join(__dirname, '..', 'examples', 'logo.svg'),
        createDocument(shapes)
    )

    .then(() => console.log('Generated logo.svg'))
      .catch((err) => console.error(err));
   };
 
    fs.writeFile('logo.svg', path, (err) =>
      err ? console.error(err) : console.log('Success! You have generated a logo.'));


// // Generate the SVG Logo
// // const {generatedLogo} = require() ---part of the acceptance criteria
//     function generatedLogo (answers){
//       const { initials, textColor, shapeColor, shape } = answers;
//       //compare with the mini-project

//     }
// Function for the README file
// function to save the logo in the directory ---must go in the examples' folder

// function call to initialize the application
init();