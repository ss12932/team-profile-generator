const Engineer = require("./intern");

describe("Intern", () => {
  const mockName = "Sinh Fu San";
  const mockId = "1";
  const mockEmail = "ss12932@my.bristol.ac.uk";
  const mockSchool = "University of Birmingham";
  const mockRole = "Intern";

  const mockIntern = new Intern({
    name: mockName,
    id: mockId,
    email: mockEmail,
    role: mockRole,
    school: mockSchool,
  });

  it("should be an instantiated object of the Intern class", () => {
    expect(mockIntern).toBeInstanceOf(Intern);
  });

  it("should return the correct name", () => {
    expect(mockIntern.getName()).toEqual(mockName);
  });

  it("should return the correct ID", () => {
    expect(mockIntern.getId()).toEqual(mockId);
  });
  it("should return the correct email", () => {
    expect(mockIntern.getEmail()).toEqual(mockEmail);
  });
  it("should return the correct school", () => {
    expect(mockIntern.getSchool()).toEqual(mockSchool);
  });
  it("should return the correct role", () => {
    expect(mockIntern.getRole()).toEqual(mockRole);
  });
});
