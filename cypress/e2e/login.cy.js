describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('index.html')
        cy.get('#account-link').click()
    });
    
    it('Cenário Positivo 01: Login', () => {
        cy.get('#email').type('admin@biblioteca.com')
        cy.get(`#password`).type('admin123')
        cy.get('#toggle-password').click()
        cy.get('#login-btn').click()
        cy.url('admin-dashboard').should('exist')
    });
    
    it.only('Cenário Negativo 01: Senha incorreta', () => {
        cy.get('#email').type('admin@biblioteca.com')
        cy.get(`#password`).type('admin12')
        cy.get('#toggle-password').click()
        cy.get('#login-btn').click()
        cy.get('#alert-container').should('exist', 'incorretos')
    });
});