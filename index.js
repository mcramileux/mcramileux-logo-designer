const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');
// const {} = require('./lib') shape.test.js????
// const {generatedLogo} = require() ---part of the acceptance criteria

// Below are the array of questions
// const questions = [
    inquirer
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
  
    .then(data => {
        if (data.shape === "triangle"){ 
          // need to call a function in each questions
          //make a function that takes the data
          //function triangle/square/circle = {} //functions for the shapes needs to return to html
          //calling a lot of functions - main program - user data

             data.svg = ` 
             <svg height="150" width="300">

             <polygon points="150, 18 244, 182 56, 182" fill="blue" />
         </svg>
             `
        }
        else if (data.shape==="square") {
            data.svg = `
            <svg height="150" width="300">

            <rect x="50" y="30" width="150" height="150" fill="blue" />
        </svg>
            `
        }
        else {
            data.svg = `
            <svg height="100" width="100">

            <circle cx="50" cy="50" r="40" fill="blue" />
        </svg>
            `
        }

        fs.writeFileSync("./dist/shape.html", `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${data.svg} 
</body>
</html>
        `)
    })
//think about Jquery to set 

// Function for the README file
// function writeToFile(fileName, data) {}
// function to initialize the application
// function to save the logo in the directory ---must go in the examples' folder


// function call to initialize the application
