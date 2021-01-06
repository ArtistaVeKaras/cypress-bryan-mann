describe('Fixture', () => {
    before(function() {
        cy.fixture('example').then(function(data){
             // this keyword allows the data variable to accessed
            // outside the block function 
            this.data=data
        })
    })

    beforeEach(function(){
        Cypress.config('baseUrl','https://react-redux.realworld.io/#/login?_k=ury3ky')
        cy.visit('/')
    })

    // getting data from the example file & sign in to the application
    it('should pass data from the fixture file',function() {
        cy.get('input[type=email]').type(this.data.email)
        cy.get('input[type=password]').type(this.data.password)
        cy.get('button').click()
    })
})