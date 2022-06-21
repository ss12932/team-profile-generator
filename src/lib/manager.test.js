const Manager = require("./manager");

describe("Manager", () => {
  const mockName = "Sinh Fu San";
  const mockId = "1";
  const mockEmail = "ss12932@my.bristol.ac.uk";
  const mockOfficeNo = "123456789";
  const mockRole = "Manager";

  const mockManager = new Manager({
    name: mockName,
    id: mockId,
    email: mockEmail,
    role: mockRole,
    officeNumber: mockOfficeNo,
  });

  it("should be an instantiated object of the Manager class", () => {
    expect(mockManager).toBeInstanceOf(Manager);
  });

  it("should return the correct name", () => {
    expect(mockManager.getName()).toEqual(mockName);
  });

  it("should return the correct ID", () => {
    expect(mockManager.getId()).toEqual(mockId);
  });
  it("should return the correct email", () => {
    expect(mockManager.getEmail()).toEqual(mockEmail);
  });
  it("should return the correct office number", () => {
    expect(mockManager.getOfficeNumber()).toEqual(mockOfficeNo);
  });
  it("should return the correct role", () => {
    expect(mockManager.getRole()).toEqual(mockRole);
  });
});
