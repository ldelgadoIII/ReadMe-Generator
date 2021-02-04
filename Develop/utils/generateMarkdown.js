// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let finalBadge;
  switch (data.license) {
    case "":
      finalBadge = "insert link here";
      break;
    case "":
      finalBadge = "insert link here";
      break;
    case "":
      finalBadge = "insert link here";
      break;
    default:
      finalBadge = "";
      break;
  }

  return `# ${data.title}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ## Installation
  
  ${data.installation}
  
  ## Badges

  ${finalBadge}
`;
}

module.exports = generateMarkdown;
