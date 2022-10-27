// packages needed
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');
var fs = require('fs');
var answerArray = [];

function init() {
    inquirer
        .prompt([
            {
                when: () => answerArray.length == 0,
                type: 'input',
                name: 'managerName',
                message: 'What is the name of your team manager?',
            },
            {
                when: () => answerArray.length == 0,
                type: 'input',
                name: 'managerEmployeeID',
                message: "What is the team manager's employee ID?",
            },
            {
                when: () => answerArray.length > 0,
                type: 'list',
                name: 'addEmployee',
                message: 'Want to add one of the following employees?:',
                choices: ['Intern', 'Engineer', 'Manager'],
            },
        ])
}