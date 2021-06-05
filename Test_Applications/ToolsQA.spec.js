/// <reference types="cypress" />
var Subject='div[id="subjectsWrapper"]>div:nth-child(2) #subjectsInput'
var Address='#currentAddress'
var State='div[id="stateCity-wrapper"] div:nth-child(2) #react-select-3-input'
describe('Tools QA',()=>{
    it('My TestCase',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#app > div > div > div.pattern-backgound.playgound-header > div').should('have.text','Practice Form'
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.practice-form-wrapper > h5').should('have.text','Student Registration Form')
        cy.get('#firstName').should('be.enabled').type('Kadakuntla')
        cy.get('#lastName').should('be.enabled').type('Sowmya')
        cy.get('#userEmail').should('be.enabled').type('sowmya.12@gmail.com')
        cy.get('#genterWrapper > div.col-md-3.col-sm-12').should('have.text','Gender')
        cy.get('div[id="genterWrapper"] div:nth-child(2) > input').check({force:true}).should('be.checked')
        cy.get('#userNumber-label').should('have.text','Mobile(10 Digits)')
        cy.get('#userNumber').should('be.enabled').type('8234765689')
        cy.get('#dateOfBirth-label').should('have.text','Date of Birth')
        cy.get('#dateOfBirthInput').click()
        cy.get('#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header > div.react-datepicker__header__dropdown.react-datepicker__header__dropdown--select > div.react-datepicker__month-dropdown-container.react-datepicker__month-dropdown-container--select > select').should('be.enabled').select('April')
        cy.get('#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header > div.react-datepicker__header__dropdown.react-datepicker__header__dropdown--select > div.react-datepicker__year-dropdown-container.react-datepicker__year-dropdown-container--select > select').should('be.enabled').select('1998')
        cy.get('#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(1) > div.react-datepicker__day.react-datepicker__day--002').click()
        cy.get('#subjects-label').should('have.text','Subjects')
        cy.get('#subjectsContainer').click()
        cy.get(Subject).type('Computer Science')
        cy.get(Subject).type('{enter}')
        cy.get(Subject).type('English')
        cy.get(Subject).type('{enter}')
        cy.get('#hobbies-checkbox-2').check({force:true}).should('be.checked')
        cy.get(Address).should('be.enabled').type('#1-7-123/K')
        cy.get(Address).should('be.enabled').type('{enter}')
        cy.get(Address).should('be.enabled').type('Ramanagar')
        cy.get(Address).should('be.enabled').type('{enter}')
        cy.get(Address).should('be.enabled').type('Hyderabad')
        cy.get('#state').click()
        cy.get(State).type('NCR')
        cy.get(State).type('{enter}')
        cy.get('#submit').should('be.enabled').click()
    })//it
})//describe
