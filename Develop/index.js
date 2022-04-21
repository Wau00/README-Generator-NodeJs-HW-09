// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'

        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Is there any installation process?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage/purpose of this project?'
        },
        {
            type: 'input',
            name: 'colaborator',
            message: 'Is there any colaborator?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Any test implemented?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email'
        },
        {
            type: 'list',
            name: 'license',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
    ])
    .then((answers) =>{
        const readmeContent = generateMarkdown(answers);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
