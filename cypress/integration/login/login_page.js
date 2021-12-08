/// <reference types="cypress" />

class login {
    constructor() {
        this.email = "input[id='email-input']"
        this.senha = "input[id='password-input']"
        this.btnContinuar = "button[id='login-button']"
    }

    get acessarPagina() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false    
        })
        
        return cy.visit('https://cliente.americanas.com.br/simple-login/?next=https%3A%2F%2Fwww.americanas.com.br%2F'),
        cy.contains('Login do Cliente')
    }

    get fazerLogin() {
        return cy.get(this.email).type('teste@teste.com.br'),
         cy.get(this.senha).type('123456'),
         cy.get(this.btnContinuar).click()

    }

    get resultadoLogin() {
        return  cy.log('Tela, login não realizado, em desenvolvimento')
    }

}

export default new login();
