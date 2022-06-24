const Employee = require('./employee.js');

class Intern extends Employee {
  constructor({ name, id, email, role, school }) {
    super(name, id, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  createCard() {
    return `<div
    class="w-80 flex p-6 flex-col items-center bg-cadet-blue-crayola space-y-6 rounded"
  >
    <div class="flex flex-col items-center">
      <h2 class="font-bold text-3xl">${this.getName()}</h2>
      <h3 class="font-bold text-2xl">${this.getRole()}</h3>
    </div>
    <div>
      <img
        class="h-36 w-36 rounded-full bg-cultured p-4"
        src="./assets/img/intern.jpg"
        alt=""
      />
    </div>
    <!-- card info section -->
    <div class="bg-cultured-2 p-4 px-10 rounded space-y-4 shadow w-full">
      <div>
        <div class="font-bold">ID:</div>
        <div>${this.getId()}</div>
      </div>
      <div>
        <div>
          <div class="font-bold">Email:</div>
          <div><a class="underline" href="mailto:${this.getEmail()}">${this.getEmail()} target="_blank"</a></div>
        </div>
      </div>
      <div>
        <div class="font-bold">School:</div>
        <div>${this.getSchool()}</div>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Intern;
