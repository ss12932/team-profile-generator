const initQuestion = {
  type: "confirm",
  name: "initQ",
  message:
    "Welcome to my Team Profile Generator! This will generate a static HTML page of your software development team! Would you like to proceed?",
};
const employeeQuestions = [
  {
    type: "list",
    name: "role",
    message: "What the new employee's role?",
    choices: ["manager", "engineer", "intern"],
  },
  {
    type: "input",
    name: "name",
    message: "What is the employee's full name?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the employee's full name to proceed";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's identification number (ID)?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the employee's ID to proceed";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the employee's email to proceed";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What office number is best to reach the manager?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the manager's office number to proceed";
      }
      return true;
    },
    when(answers) {
      return answers.role === "manager";
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the engineer's username to proceed";
      }
      return true;
    },
    when(answers) {
      return answers.role === "engineer";
    },
  },
  {
    type: "input",
    name: "school",
    message:
      "What is the name of the university/school the intern graduated from?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the name of the university/school that the intern graduated from";
      }
      return true;
    },
    when(answers) {
      return answers.role === "intern";
    },
  },
];

const addAnotherEEQuestion = {
  type: "confirm",
  name: "addAnotherEE",
  message: "Would you like to add another employee?",
};
module.exports = { initQuestion, employeeQuestions, addAnotherEEQuestion };
