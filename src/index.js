const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const {
  initQuestion,
  employeeQuestions,
  addAnotherEEQuestion,
} = require("./questions");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./renderMarkup");

const init = async () => {
  //initial confirm prompt to greet the user + ask if to proceed.
  const initResponse = await inquirer.prompt(initQuestion);

  if (initResponse) {
    //keep true, until user answers confirm prompt, will be set to false and loop will exit.
    let teamCreationInProgress = true;
    //array to store all members of team from while loop below;
    const totalEmployeesArr = [];

    while (teamCreationInProgress) {
      const employeeAnswers = await inquirer.prompt(employeeQuestions);
      const { role } = employeeAnswers;

      if (role === "manager") {
        const manager = new Manager(employeeAnswers);
        totalEmployeesArr.push(manager);
      } else if (role === "engineer") {
        const engineer = new Engineer(employeeAnswers);
        totalEmployeesArr.push(engineer);
      } else {
        const intern = new Intern(employeeAnswers);
        totalEmployeesArr.push(intern);
      }

      const addAnotherEE = await inquirer.prompt(addAnotherEEQuestion);
      if (!addAnotherEE) {
        teamCreationInProgress = false;
      }
    }
    const html = generateHTML(totalEmployeesArr);
  }
};
init();
