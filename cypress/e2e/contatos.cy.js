/// <reference types="cypress"/>

describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher o formulário de contato com sucesso.', () => {
    cy.get('[name="name"]').type('Brian')
    cy.get('[name="email"]').type('brian75@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Preciso de ajuda em um setor específico.')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Cenário Negativo 1: Deve validar mensagem de erro sem preencher o nome', () => {
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo Nome').should('exist')
  });

  it('Cenário Negativo 2: Deve validar mensagem de erro sem preencher o email', () => {
    cy.get('[name="name"]').type('Brat Gray')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo E-mail.').should('exist')
  });

  it('Cenário Negativo 3: Deve validar mensagem de erro sem preencher o assunto', () => {
    cy.get('[name="name"]').type('Brat Gray')
    cy.get('[name="email"]').type('brat66@gmail.com')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, selecione o Assunto.').should('exist')
  });

  it('Cenário Negativo 4: Deve validar mensagem de erro sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Brat Gray')
    cy.get('[name="email"]').type('brat66@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, escreva sua Mensagem.').should('exist')
  });

});