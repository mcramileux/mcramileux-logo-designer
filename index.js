// Calling inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs/promises');

// Written path will be saved into ./examples
const { join } = require('path');

// Importing the shapes in the folder ./lib/shapes
const { generatedLogo } = require('./lib/shapes');

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
  })
  .catch((error) => {
    console.log('error');
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
};



// Function has been created to initialize app
// Followed the Mini-Project solved solution
  function init() {
    promptQuestions();
    
      
      // const svgMaker = generatedLogo(answers);
      //   console.log(svgMaker);

    // return writeFile(
    //   join(__dirname, '..', 'examples', 'logo.svg'),
    //     createDocument(shapes)
    // )

  //   then(() => console.log('Generated logo.svg'))
  //     .catch((err) => console.error(err));
   };
 
    // fs.writeFile('logo.svg','', (err) =>
    //   err ? console.error(err) : console.log('Success! You have generated a logo.'));


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