const fs = require("fs");
const inquirer = require("inquirer");
const {
  initQuestion,
  employeeQuestions,
  addAnotherEEQuestion,
} = require("./questions");

const init = () => {
  //initial confirm prompt to greet the user + ask if to proceed.
  const initResponse = await inquirer.prompt(initQuestion);

  
  if(initResponse) {
    //keep true, until user answers confirm prompt, will be set to false and loop will exit.
    let teamCreationInProgress = true;
    //array to store all members of team from while loop below;
    const totalEmployeesArr = [];
  
    while(teamCreationInProgress) {
      const {role} = await inquirer.prompt(employeeQuestions);

    // if manager
    // if intern
    // if engineer
    }
  }
};
init();
