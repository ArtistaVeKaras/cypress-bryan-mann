describe('Testing the login page', () => {
    beforeEach(() => {
        // visit the conduit react app
        cy.visit(Cypress.env('baseUrl'))
    })

    it('greets with Sign in', () => {
        // assert h1 element contains text Sign In
        cy.contains('h1','Sign In')
    })

    it('links to #/register', () => {
        // assert Need an account element contains attr href
        cy
        .contains('Need an account?')
        .should('have.attr', 'href', '#register')
    })

    it('requires email', () => {
        // checking email is required 
        //click the sign in button first 
        // to get the error message
        cy
        .get('.btn')
        .contains('Sign in').click()
        cy
        .get('.error-messages > li')
        .should('contain','email or password is invalid')
    })

    it('requires password', () => {
        // enter email then press enter
        // to get the error message
        // then assert error message is displayed
        cy
        .get(':nth-child(1) > .form-control')
        .type('password@gmail.com{enter}')
        cy
        .get('.error-messages > li')
        .should('contain','email or password is invalid')
    })

    it('requires valid username and password', () => {
        // get the error message to be displayed
        // first by entering a valid username 
        // and invalid password
        // then assert error message is displayed
        cy
        .get(':nth-child(1) > .form-control')
        .type('password@gmail.com')
        cy
        .get(':nth-child(2) > .form-control')
        .type('{enter}')

        .get('.error-messages > li')
        .should('contain','email or password is invalid')
        // cy.get('.btn')
        // .click()
    })

    it('navigates to #/ on successful login', () => {
        // user logins successful
        // then use the hash command to
        // validate the ulr contains #/
        // email testporto@gmail.com
        // password portugal
        cy
        .get(':nth-child(1) > .form-control')
        .type('testporto@gmail.com')
        cy
        .get(':nth-child(2) > .form-control')
        .type('portugal{enter}')

        // assert
        cy.hash().should('contain','#/?_') 

    })
})