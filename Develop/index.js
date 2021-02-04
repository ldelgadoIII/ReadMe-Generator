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
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message: "Who were you collaborators if any?",
    name: "credits",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: ["Apache", "Creative Commons", "MIT", "None"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What tests would you like to include?",
    name: "tests",
  },
];

// FUNCTIONS =========================================
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
