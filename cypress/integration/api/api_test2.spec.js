describe('HTTP Example', () =>{
    Cypress.config('baseUrl', 'https://httpbin.org/')
    it('GET',()=>{
        cy.request('https://httpbin.org/').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.headers.connection).to.equal('keep-alive')
        })
    })

    it('POST create user',() => {
        cy.request({
            method:'POST',
            url:'/post',
            body: {
            'name': 'Pramod',
            'age': 27
            },

        }).then((response) => {
            expect(response.body).have.property('json')
            expect(response.body.json.name).to.equal('Pramod')
            expect(response.body.json.age).to.equal(27)
        })
        
    })
})