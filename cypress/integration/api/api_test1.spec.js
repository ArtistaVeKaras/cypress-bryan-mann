describe('Api testing', () => {
    // updated the base url only for this file
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')

    it('GET-read', () => {
        // by default cy request are GET methods
        // so no need to declare the Get method 
        //  inside the GET method
        cy.request('/employees').then((resp) => {
            expect(resp.status).to.equal(200)
            expect(resp.body).not.to.be.null
            expect(resp.body.data).to.have.length(24)
        })
    })

    it('POST- create', () => {
        // sending post content
        const item = {"name":"test","salary":"123","age":"23"}

        cy.request({method:'POST', url:'/create', body:item, failOnStatusCode: false})
        .its('status').should('equal', 406)
        // .its('body')
        // .its('data')
        // .should('include',{name:'test'})
    })
})