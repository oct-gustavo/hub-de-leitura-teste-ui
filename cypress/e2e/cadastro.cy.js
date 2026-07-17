/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

  beforeEach(() => {
    // Visita a URL
    cy.visit('index.html')
    // Entra na pagina de login
    cy.get('#account-link').click()
    // Entra na página para registrar a conta
    cy.get('[href="/register.html"]').click()
  });

  // Cenário de automação do caminho positivo
  it.only('Cenário Positivo 01 Feat:Login', () => {
    //Função determinando emails aleatórios para cadastro
    let email = `teste${Date.now()}@teste.com`
    // Preenche o nome
    cy.get('#name').type("Luis Gustavo de Araújo")
    // Preenche o email
    cy.get('#email').type(email)
    // Preenche o telefone
    cy.get('#phone').type("97766666666")
    // Preenche a senha
    cy.get('#password').type("admin233")
    // Confirma a senha
    cy.get('#confirm-password').type("admin233")
    // Aceita os termos
    cy.get('#terms-agreement').click()
    // Clica no registro
    cy.get('#register-btn').click()
    // Retorna sucesso na tela do usuário 
    cy.url().should('include', 'dashboard')

  });  

it('Cenário Negativo 01 Feat:Login', () => {
    cy.get('#name').type("Luis Gustavo de Araújo")
    // Preenche o mesmo email
    cy.get('#email').type("teste02@gmail.com")
    // Preenche o telefone
    cy.get('#phone').type("97766666666")
    // Preenche a senha
    cy.get('#password').type("admin233")
    // Confirma a senha
    cy.get('#confirm-password').type("admin233")
    // Aceita os termos
    cy.get('#terms-agreement').click()
    // Clica para registrar a conta
    cy.get('#register-btn').click()
    // Retorna sucesso no aviso usando o mesmo e-mail 
    cy.contains(' Erro ao criar conta. Tente novamente.').should('exist')
});
});