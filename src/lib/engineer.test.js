const Engineer = require("./engineer");

describe("Engineer", () => {
  const mockName = "Sinh Fu San";
  const mockId = "1";
  const mockEmail = "ss12932@my.bristol.ac.uk";
  const mockGithub = "ss12932";
  const mockRole = "Engineer";

  const mockEngineer = new Engineer(
    mockName,
    mockId,
    mockEmail,
    mockRole,
    mockGithub
  );

  it("should be an instantiated object of the Engineer class", () => {
    expect(mockEngineer).toBeInstanceOf(Engineer);
  });

  it("should return the correct name", () => {
    expect(mockEngineer.getName()).toEqual(mockName);
  });

  it("should return the correct ID", () => {
    expect(mockEngineer.getId()).toEqual(mockId);
  });
  it("should return the correct email", () => {
    expect(mockEngineer.getEmail()).toEqual(mockEmail);
  });
  it("should return the correct Github username", () => {
    expect(mockEngineer.getGithub()).toEqual(mockGithub);
  });
  it("should return the correct email", () => {
    expect(mockEngineer.getRole()).toEqual(mockRole);
  });
});
