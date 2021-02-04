// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let finalBadge;
  switch (data.license) {
    case "Apache":
      finalBadge =
        "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";
      break;
    case "GNU":
      finalBadge =
        "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
      break;
    case "MIT":
      finalBadge =
        "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;
    default:
      finalBadge = "";
      break;
  }

  return `# ${data.title}
  
  ${finalBadge}
  ## Descriptions

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
    
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## License

  This application is covered by the ${data.license} license.

  ## Contrubuting

  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions please send an email to: ${data.email} or go to github at: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
