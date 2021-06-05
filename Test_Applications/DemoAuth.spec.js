/// <reference types="cypress" />
var address='#basicBootstrapForm > div:nth-child(2) > div > textarea'
var listbox1='#basicBootstrapForm > div:nth-child(7) > div > multi-select > div:nth-child(2) > ul'
describe('Automation testing',() => {
    it('demo',() => {
        cy.visit('http://demo.automationtesting.in/Register.html',{timeout:100000})
        cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').should('be.enabled').type('Gandla')
        cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input').should('be.enabled').type('Sai Priya')
        cy.get(address).should('be.enabled').type('#1-8-456/K')
        cy.get(address).should('be.enabled').type('{enter}')
        cy.get(address).should('be.enabled').type('Chaitanyanagar')
        cy.get(address).should('be.enabled').type('{enter}')
        cy.get(address).should('be.enabled').type('Nizambad')
        cy.get('#eid > input').should('be.enabled').type('sai12@gmail.com')
        cy.get('#basicBootstrapForm > div:nth-child(4) > div > input').should('be.enabled').type('9645789345')
        cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(2) > input').should('not.be.checked').check().and('be.checked')
        cy.get('input[type="checkbox"]').check(['Cricket','Hockey']).should('be.checked')
        cy.get('#msdd').click()
        cy.get(listbox1).contains('Croatian').click()
        cy.get(listbox1).contains('English').click()
        cy.get('#Skills').should('be.enabled').select('Android',{force:true})
        cy.get('#countries').should('be.enabled').select('Australia',{force:true})
        cy.get('#country').select('India',{force:true})
        cy.get('#yearbox').should('be.enabled').select('1997')
        cy.get('#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select').should('be.enabled').select('April')
        cy.get('#daybox').should('be.enabled').select('23')
        cy.get('#firstpassword').should('be.enabled').type('Sai@123')
        cy.get('#secondpassword').should('be.enabled').type('Sai@123')
        cy.get('#submitbtn').should('be.enabled').click()
    })//it
})//describe
