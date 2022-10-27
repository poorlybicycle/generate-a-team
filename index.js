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
                type: 'input',
                name: 'managerEmployeeID',
                message: "What is the team manager's employee ID?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email address?",
            },
            {
                type: 'input',
                name: 'managerOfficeNum',
                message: "What is the team manager's office number?",
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add one of the following employees?:',
                choices: ['Intern', 'Engineer', 'Manager', 'Finish building my team'],
            },
            {
                when: (answers) => answers.addEmployee === "Engineer",
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                when: (answers) => answers.addEmployee === "Engineer",
                type: 'input',
                name: 'engineerID',
                message: "What is the engineer's ID?",
            },
            {
                when: (answers) => answers.addEmployee === "Engineer",
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                when: (answers) => answers.addEmployee === "Engineer",
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?",
            },
            {
                type: 'list',
                name: 'finish',
                message: 'Would you like to add another employee?:',
                choices: ['Intern', 'Finish building my team'],
            },
            {
                when: (answers) => answers.finish === "Intern",
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
              },
              {
                when: (answers) => answers.finish === "Intern",
                type: 'input',
                name: 'internID',
                message: "What is the intern's ID?",
              },
              {
                when: (answers) => answers.finish === "Intern",
                type: 'input',
                name: 'internSchool',
                message: "What school does the intern attend?",
              },
              {
                when: (answers) => answers.addEmployee === "Intern",
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
              },
              {
                when: (answers) => answers.addEmployee === "Intern",
                type: 'input',
                name: 'internID',
                message: "What is the intern's ID?",
              },
              {
                when: (answers) => answers.addEmployee === "Intern",
                type: 'input',
                name: 'internSchool',
                message: "What school does the intern attend?",
              },
        ])
}