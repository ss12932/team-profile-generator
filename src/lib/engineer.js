const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email);
    this.github = github;
    this.role = role;
  }

  getGithub() {
    return this.github;
  }
  createCard() {
    return ``;
  }
}

module.exports = Engineer;
