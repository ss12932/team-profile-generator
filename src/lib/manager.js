const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = role;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Manager;
