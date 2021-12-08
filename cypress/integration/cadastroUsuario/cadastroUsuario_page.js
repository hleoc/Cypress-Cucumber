/// <reference types="cypress" />

class cadastroUsuario {
    constructor() {
        this.logoAmericanas = "svg[class='brd-logo logo']"
        this.cookies = "button[id='lgpd-accept']"
        this.btnOpcoes = "svg[class='usr-icon']"
        this.btnCadastro = "a[class='usr-signup']"
        this.criarCadastro = "h2[class='sc-bQFtmx ggCFVc']"
        this.nomeCompleto = "[data-cy='formField__name']"
        this.feminino = "label[data-cy='labelFor__F']"
        this.dataNascimento = "input[data-cy='formField__birthDate']"
        this.cpf = "input[data-cy='formField__cpf']"
    }

    get acessarPagina() {
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
                
        })
        return cy.visit("https://cliente.americanas.com.br/minha-conta/cadastro?next=https%3A%2F%2Fwww.americanas.com.br%2F"),
        cy.contains('criar seu cadastro')
        
        // return cy.visit("https://www.americanas.com.br/"),
        //  cy.get(this.logoAmericanas).should('exist')

        // Cypress.on('uncaught:exception', (err, runnable) => {

        //     return false
            
        //     })
        
        // return cy.visit('https://www.americanas.com.br/'),
        //  cy.get(this.logoAmericanas).should('exist'),
        //  cy.get(this.cookies).click(),
        //  cy.get(this.btnOpcoes).click(),
        //  cy.get('a.usr-signup'),
        //  cy.contains('cliente novo? cadastrar').click()
         //cy.get(this.criarCadastro).should('exist')
        //cy.contains(' cadastro')
    }

    get realizarCadastro() {
        return cy.get(this.nomeCompleto).type('John Wick'),
         cy.get(this.feminino).click(),
         cy.get(this.dataNascimento).type('15121985'),
         cy.get(this.cpf).type('00000000000')
    }   

}

export default new cadastroUsuario();
