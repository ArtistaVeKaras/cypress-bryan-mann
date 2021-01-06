// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// command for user to login 
// Cypress.Commands.add('login',() =>{
//     cy.visit(Cypress.env('baseUrl'))
//     cy.get(':nth-child(1) > .form-control').type('testporto@gmail.com')
//     cy.get(':nth-child(2) > .form-control').type('portugal{enter}')
//     cy.hash().should('contain','#/?_') 
// })

// retrive the access token from the server
// avoid having to use the login function because
// as this cause the login function to be used 
// in every test ans is not very efficient to do it this way
Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: "https://react-redux.realworld.io/#/login?_k=ury3ky",
        body: {
            user:{
                email: 'testporto@gmail.com',
                password: 'portugal'
            }
        }
    })
    .then((res) => {
        window.localStorage.setItem('jwt', res.body.user.token)
    })
})