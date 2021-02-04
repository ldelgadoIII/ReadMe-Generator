// DEPENDENCIES ============================
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// STARTING DATA ===========================
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project about?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install it?",
    name: "title",
  },
  {
    type: "input",
    message: "How is this project used?",
    name: "title",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "title",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "title",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit Completed!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("ReadMe.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
