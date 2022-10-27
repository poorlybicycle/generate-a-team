// include packages needed for this application
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');
var fs = require('fs');
var answerArray = [];

// const employeeList = [managerList, engineerList, internList];

//creates array of questions for user input
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
            //this will stop it from looping endlessly asking about the manager
            {
                type: 'list',
                name: 'finish',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No'],
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

        .then((answers) => {
            answerArray.push(answers);
            if ('No' === answers.finish) {
              writeToFile("EMPLOYEES.html", generateHTML(answerArray));
              console.log('HTML successfully generated', answerArray);
            }
            else {
              // use class to make employee 
              init();
            }
            console.log(answers);
          })
          .catch((error) => {
            if (error.isTtyError) {
                // error if prompt could not be rendered in the current environment
              console.log (["Could not be rendered in the current environment"]);
            } else {
                //if there was another issue
              console.log (["Something else went wrong :( "]);
            }
          });
}

// function that writes HTML file: 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => console.log(err))
  };

// function call to initialize app
init ();