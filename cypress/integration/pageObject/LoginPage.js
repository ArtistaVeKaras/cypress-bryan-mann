class LoginPage {
  visit() {
    cy.visit("https://react-redux.realworld.io/#/login?_k=ury3ky");
  }

  fillEmail(email) {
    const emailField = cy.get("input[type=email]");
    emailField.clear();
    emailField.type(email);
    return this;
  }

  fillPassword(password) {
    const passwordField = cy.get("input[type=password]");
    passwordField.clear();
    passwordField.type(password);
    return this;
  }
  clickSubmit() {
    const clickBtn = cy.get("button")
    clickBtn.click()
    return this;
  }

}

  export default LoginPage