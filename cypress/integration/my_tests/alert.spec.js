describe('Handle alert windows', () => {
    beforeEach(() => {
        Cypress.config('baseUrl', 'https://mail.rediff.com/cgi-bin/login.cgi')
        cy.visit('/')
    })
    
    it('should click on the alert button', () => {
        cy.get('input[type=submit]').click()

        // click the alert button
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Please enter a valid user name')
        })
        })
})