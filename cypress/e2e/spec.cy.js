describe('Examen T2 CALIDAD', () => {
    beforeEach('Iniciar sesion para entrar a mi Biblioteca', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#agregarBiblioteca').click()
        cy.get('#usuario').type('admin')
        cy.get('#contrasena').type('admin')
        cy.get('#iniciarSesion').click()

    })
    it('Agregar Libro y entrar a Biblioteca', () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#agregarBiblioteca').click()
        cy.get('#miBiblioteca').click()
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.location('pathname').should('eq', '/Biblioteca')

    })
    it('Cambiar estado: leyendo en la Biblioteca', () => {
        cy.visit(Cypress.env('baseUrl') + '/Biblioteca')
        cy.get('#estadolibroLeyendo').click()
    })
    it('Cambiar estado: terminado en la Biblioteca', () => {
        cy.visit(Cypress.env('baseUrl') + '/Biblioteca')
        cy.get('#estadolibroTerminado').click()
    })
})