describe('nop commerce search for a Mac', () => {
    Cypress.config('baseUrl','https://demo.nopcommerce.com')
    it('should perform a search', () => {
        cy.visit('/')
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        cy.get('[type="submit"]').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').clear().type('2')
        cy.get('#add-to-cart-button-4').click()
        cy.get('.cart-label').click()
        cy.get('tbody > tr > .unit-price').should('have.text','Price: $1,800.00')
    })
})