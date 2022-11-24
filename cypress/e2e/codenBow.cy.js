/// <reference types="cypress" />
describe('My training', function(){
    it ('checkbox Test', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3')
})

})