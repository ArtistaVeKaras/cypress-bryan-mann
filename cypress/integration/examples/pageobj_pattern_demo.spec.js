import LoginPage from "../pageObject/LoginPage";

describe("working with page obj demo test", () => {
  it("Valid Login Test", () => {
    // this test will fail to login but the concept works fine
    const login = new LoginPage();
    login.visit();
    login.fillEmail("porto@outlook.com");
    login.fillPassword("124");
    login.clickSubmit();
  });
});
