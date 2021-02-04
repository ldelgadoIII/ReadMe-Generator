// DEPENDENCIES ============================
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// STARTING DATA ===========================
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
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit Completed!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "username",
    },
  ])
  .then((reponse) => {
    console.log(reponse.username);
    // writeToFile("ReadMe.md", response)
  });

// for (const question of questions) {

// }
