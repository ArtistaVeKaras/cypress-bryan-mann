describe('settings' , () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/#/settings')
    })

    it('greets with your Settings', () => {
       cy.get('.text-xs-center')
       .contains('h1', 'Your Settings')
    })
})