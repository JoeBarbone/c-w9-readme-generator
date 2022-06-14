// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");



// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "projectTitle",
            message: "Enter Project Title:"   
        },
        {
            type: "input",
            name: "projectDesc",
            message: "Enter Project Description:"   
        },
        {
            type: "input",
            name: "installationInstructions",
            message: "Enter Installation Instructions:"   
        },
        {
            type: "input",
            name: "usage",
            message: "Enter Project Usage:"   
        },
        {
            type: "input",
            name: "contributionGuidelines",
            message: "Enter Contribution Guidelines:"   
        },
        {
            type: "input",
            name: "testInstructions",
            message: "Enter Test Instructions:"   
        },
        {
            type: "list",
            name: "licenseType",
            choices: ["BSD", "MIT", "GPL"]   
        },
        {
            type: "input",
            name: "githubName",
            message: "Enter GitHub Name:"   
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address:"   
        },
        {
            type: "input",
            name: "credits",
            message: "Enter others who have helped:"   
        }
    ];
      

// TODO: Create a function to write README file
const writeToFile = fileContent => {

    fs.writeFile("./dist/README.md", fileContent, err => {
        if (err) {
            return;
        }

        if (!err) {
            return console.log("File Created Successfully!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
        var fileContent = generateMarkdown(data);
        writeToFile(fileContent)
    });
}

// Function call to initialize app
init();


module.exports = questions;
    