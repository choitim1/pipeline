
/// <reference types="Cypress" />
describe('Sign Up', function() {
    it('Navigate to url', function() {
        let num = Math.floor(Math.random()*1000+1)
        let email = `choitim2${num}@gmail.com`
        let password = `${num}Test${num}`
        cy.visit('https://www.target.com/');
        cy.wait(2000);
        cy.contains('Sign in').click()
        cy.wait(2000);
        cy.contains('Create Account').click()
        cy.wait(2000);
        // cy.get('input[id  = "username"]').type("choitim2010@gmail.com")
        cy.get('input[id  = "username"]').type(email)
        cy.log(email)
        cy.get('input[id  = "firstname"]').type("Timur")
        cy.get('input[id  = "lastname"]').type("Tsoi")
        cy.get("#password").type(password)
        cy.log(password)
        
            // cy.get('div[class = "styles__CheckboxVisual-sc-1v63imw-5 dsGYXU]').click()
        cy.contains('Keep me signed in').click()
        cy.get('#createAccount').click()
        cy.url().should("contain","https://www.target.com/login?client_id=ec")
            // cy.get('button[type = "submit"]').click()

    });
});