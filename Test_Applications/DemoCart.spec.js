/// <reference types="cypress" />
var MacBook = '#content > div.row > div:nth-child(1) > div > div.caption > h4 > a'
var URLid = '/product&product_id=43'
var AddtoWishList='#content > div > div.col-sm-4 > div.btn-group > button:nth-child(1)'
var ComparethisProduct='#content > div > div.col-sm-4 > div.btn-group > button:nth-child(2)'
var Quant='#input-quantity'
var AddtoCart='#button-cart'
var Success='#product-product > div.alert.alert-success.alert-dismissible'
describe('Demo Opencart',function(){
    before(()=>{
        cy.visit(Cypress.env('url'))
        // how to use cypress env files.
    })//before
    it('MacBook',function(){
        // create global variable and assign the css accordingly
        // use global variables instead of hardcoding css
        cy.get(MacBook).should('have.text','MacBook')
        cy.get(MacBook).click()
        cy.url().should('include',URLid)
        cy.get(AddtoWishList).should('be.visible')
        cy.get(AddtoWishList).should('be.enabled')
        cy.get(ComparethisProduct).should('be.enabled')
        cy.get(ComparethisProduct).should('be.enabled')
        cy.get(Quant).should('have.value','1')
        cy.get(AddtoCart).should('have.text','Add to Cart')
        cy.get(AddtoCart).click()
        cy.get(Success).should('contains.text','Success: You have added MacBook to your shopping cart!')
    })//it
})//describe
