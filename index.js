// Calling inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Importing the shapes in the folder ./lib/shapes
const {Circle, Square, Triangle} = require('./lib/shapes');

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
// Followed the Mini-Project solved solutions
  function init() {
    inquirer
      .prompt()
        .then((answers) => {
          console.log(answers);
      });
      
      const svgMaker = generatedLog(answers);
        console.log(svgMaker);

    return writeFile(
      join(__dirname, '..', 'examples', 'logo.svg'),
        createDocument(shapes)
    );

    then(() => console.log('Generated logo.svg'))
    .catch((error) => console.error(err));  

  
    fs.writeFile(fileName, svgLogo, (err) =>
      err ? console.error(err) : console.log('Success! You have generated a logo.')
);

}
    
// Function to write data to a file
// function writeToFile(fileName, answers) {}

// Generate the SVG Logo
// const {generatedLogo} = require() ---part of the acceptance criteria
    function generatedLog (answers){
      const { initials, textColor, shapeColor, shape } = answers;

    }
// Function for the README file
// function to save the logo in the directory ---must go in the examples' folder

// function call to initialize the application
init();