const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const {
  initQuestion,
  employeeQuestions,
  addAnotherEEQuestion,
} = require("./questions");

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

      if (employeeAnswers.role === "manager") {
        const manager = new Manager(employeeAnswers);
        totalEmployeesArr.push(manager);
      }
      if (employeeAnswers.role === "engineer") {
        const engineer = new Manager(employeeAnswers);
        totalEmployeesArr.push(engineer);
      }
      if (employeeAnswers.role === "intern") {
        const intern = new Manager(employeeAnswers);
        totalEmployeesArr.push(intern);
      }

      const addAnotherEE = await inquirer.prompt(addAnotherEEQuestion);
      if (!addAnotherEE) {
        teamCreationInProgress = false;
      }
    }
  }
};
init();
