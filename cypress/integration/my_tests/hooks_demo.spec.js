describe("hooks", () => {
  before(() => {
    console.log("This is a Setup block"); //executes before all test
  });

  after(() => {
    console.log("This is a TearDown block"); //executes after all tests
  });

  beforeEach(() => {
    console.log("This is a Login block"); //executes before each test
  });

  afterEach(() => {
    console.log("This is a Logout block"); //executes after all tests
  });

  it("Searching", () => {
    console.log("This is Searching Test");
  });

  it("Advanced Searching", () => {
    console.log("This is Advanced Searching Test");
  });

  it("Listening Searching", () => {
    console.log("This is Listing Searching Test");
  });
});
