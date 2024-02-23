context('Home Page', () => {
    it('fill in a radio button', () => {
        cy.visit('http://localhost:3000')
        cy.get('[type="radio"]').check('radio1')
        cy.get('[type="checkbox"]').first().check()

    })

    it('fill in a checkbox', () => {
        cy.visit('http://localhost:3000')

        cy.get('li.selected').should('have.length', 3)
    })

    it('BCIT text area', () => {
        cy.visit('http://localhost:3000')

        cy.get('.school').should('include.text', 'BCIT')

        cy.get('.test').invoke('css', 'text-decoration').should('include', 'line-through')
        cy.get('.test').invoke('css', 'color').should('include', 'rgb(217, 217, 217)')
    })
})