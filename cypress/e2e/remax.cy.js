
/// <reference types="Cypress" />

//const { describe } = require("mocha");

describe("someTest",()=>{

    it("redirect",function(){
        cy.visit("https://ultimateqa1.com")
        cy.window().then(win => {
            cy.stub(win, 'open').as('open')
          })
          cy.get('#menu-home-page-menu > .et_pb_menu_page_id-216155 > a').as("next")
    
          cy.get('@next').click()
          cy.url().should("contain", "https://courses.ultimateqa.com/collections")
          cy.get('[class="collections__heading"]').should('have.text',"All Courses") 
        cy.get("[class='form__control form__control-search']")
    
        .type("cypress").type("{enter}")
        cy.get('.products__title').should("be.visible")
     
    })
    
    
    })