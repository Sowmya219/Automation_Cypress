/// <reference types="cypress" />
describe('OrangeHRM',function(){
    before(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })//before
    it('My Admin',()=>{
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.get('#searchSystemUser_userName').type('Aravind')
        cy.get('#searchSystemUser_userType').select('ESS')
        cy.get('#searchSystemUser_employeeName_empName').type('Dominic Chase')
        cy.get('#searchSystemUser_status').select('Enabled')
        cy.get('#searchBtn').click()
        cy.get('#menu_time_viewTimeModule > b').click()
        cy.get('#employee').type('Dominic Chase')
        cy.get('#btnView').click()
        cy.get('#menu_pim_viewMyDetails > b').click()
        cy.get('.checkboxAtch [type="checkbox"]').not('[disabled]')
  .check().should('be.checked')
    })//it
})//describe
