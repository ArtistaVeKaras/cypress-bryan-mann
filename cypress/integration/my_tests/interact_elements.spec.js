describe("Interacting withe web elements", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://demo.nopcommerce.com/");
    cy.visit("/");
  });

  it("visit the webpage and click on element", () => {
    cy.url().should("include", "nopcommerce"); // check the url contains this text

    cy.get(".header-logo > a > img").should("be.visible");

    cy.get("#small-search-box-form > .button-1").should("be.enabled"); // check search button is enabled

    cy.get(".poll-options > :nth-child(1)").should("not.be.checked"); // check checkbox is not checked

    cy.get("#pollanswers-1").check().should("be.checked").and("have.value", 1); //checks the checkbox and asserts the value is 1 = Excellent

    cy.get("#pollanswers-2").check().should("be.checked").and("have.value", 2);
  });
});
