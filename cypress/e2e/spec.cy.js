describe('Examen T2 CALIDAD', () => {
    beforeEach('Probar iniciar sesion', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#add_Biblioteca').click()
        cy.get('#user_Name').type('admin')
        cy.get('#password').type('admin')
        cy.get('#iniciar_Sesion').click()

    })
    it('Agregar Libro y entrar a Biblioteca', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#add_Biblioteca').click()
        cy.get('#mi_Biblioteca').click()
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.location('pathname').should('eq', '/Biblioteca')

    })
    it('Cambiar estado: leyendo en la Biblioteca', () => {
        cy.visit(Cypress.env('baseUrl') + '/Biblioteca')
        cy.get('#estadoLeyendo').click()
    })
    it('Cambiar estado: terminado en la Biblioteca', () => {
        cy.visit(Cypress.env('baseUrl') + '/Biblioteca')
        cy.get('#estadoTerminado').click()
    })
})