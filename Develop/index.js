// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "What is your project about?",
  "How do you install it?",
  "How is this project used?",
  "What are the contribution guidelines?",
  "What are the test instructions?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      type: "input",
      question: "What is your name?",
      name: "username",
    },
  ])
  .then((reponse) => {
    console.log(reponse.username);
  });
