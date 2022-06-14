const fs = require("fs");
const inquirer = require("inquirer");
const index = require("../index.js")


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseType) {
  let badge = "";
  switch(licenseType) {
    case "BSD":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      return badge;
      break;

    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return badge; 
      break;

    case "GPL":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      return badge;
      break;
  
    default:
      badge = "";
      return badge;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseType) {
  let licenseLink = "";

  switch(licenseType) {
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      return licenseLink;
      break;

    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      return licenseLink; 
      break;

    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      return licenseLink;
      break;
  
    default:
      licenseLink = "";
      return licenseLink;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  
# ${data.projectTitle}
${renderLicenseBadge(data.licenseType)}


## Table of Contents

### [Desciption](#description)
### [Installation Instructions](#installation)
### [Usage](#usage)
### [Contribution](#contribution)
### [Testing](#testing)
### [Additional License Information](#additional)
### [Questions](#questions)
### [Credits](#credits)

---

## Description
${data.projectDesc}  

---

## Installation
${data.installationInstructions}  

---

## Usage
${data.usage}

---

## Contribution
${data.contributionGuidelines}

---

## Testing
${data.testInstructions}

---

## Additional License Information

Find out more about license types:  ${renderLicenseLink(data.licenseType)}

---

## Questions

If you have any questions, please feel free to contact me via:  
GitHub: http://github.com/${data.githubName}  
Email: ${data.email} 

---

## Credits
${data.credits}
  
`;
}

module.exports = generateMarkdown;
