const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email);
    this.school = school;
    this.role = role;
  }

  getSchool() {
    return this.school;
  }
  createCard() {
    return ``;
  }
}

module.exports = Intern;
