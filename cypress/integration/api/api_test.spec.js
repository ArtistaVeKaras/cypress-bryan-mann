describe("User managment api", () => {
    // update the baseUrl only for this file
    // Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')
  it("GET-list user", () => {
    cy.request("GET", "api/users?page=2").then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body.data[0].first_name).to.equal("Michael");
      expect(resp.body.data[0].last_name).to.equal("Lawson");
      expect(resp.body.data[0].id).to.equal(7);
    });
  });

  it("POST-create user", () => {
    var user = {
      name: "morpheus",
      job: "leader",
    };

    cy.request("POST", "/api/users", user).then((resp) => {
      expect(resp.status).to.equal(201);
      expect(resp.body.name).equal(user.name);
      expect(resp.body.job).equal(user.job);
    });
  });

  it("Update-user", () => {
    var user1 = {
      name: "morpheus",
      job: "zion resident",
    };

    cy.request("PUT", "/api/users/2", user1).then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body.name).equal(user1.name);
      expect(resp.body.job).equal(user1.job);
    });
  });

  it("Delete user", () => {
      cy.request("DELETE", "/api/users/2",).then((resp) => {
          expect(resp.status).to.equal(204)
      })
  })
});
