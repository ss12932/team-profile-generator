const Employee = require("./employee");

describe("Employee", () => {
  const mockName = "Sinh Fu San";
  const mockId = "1";
  const mockEmail = "ss12932@my.bristol.ac.uk";

  const mockEmployee = new Employee(mockName, mockId, mockEmail);

  it("should be an instantiated object of the Employee class", () => {
    expect(mockEmployee).toBeInstanceOf(Employee);
  });

  it("should return the correct name", () => {
    expect(mockEmployee.getName()).toEqual(mockName);
  });

  it("should return the correct ID", () => {
    expect(mockEmployee.getId()).toEqual(mockId);
  });
  it("should return the correct email", () => {
    expect(mockEmployee.getEmail()).toEqual(mockEmail);
  });
});
