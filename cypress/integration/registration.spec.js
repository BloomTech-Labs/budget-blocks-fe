/// <reference types="cypress" />

context('<Register>', () => {
  
    // https://on.cypress.io/custom-commands
  
    it(' button goes to registration page', () => {
        cy.visit('https://budgetblocks.org', { timeout: 10000 })
        cy.wait(3000)
        cy.get('[href="/register"] > .MuiButtonBase-root > .MuiButton-label')
        .then(btn => {
            return btn.click()
        })
      })
    it('Email field operational', () => {
        cy.get(':nth-child(2) > .MuiInputBase-root > #outlined-basic')
        .type('test0@test123.com')
        cy.wait(1000)
    })

    it('First Name field operational', () => {
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic')
        .type('Tester')
        cy.wait(1000)
    })

    it('Last Name field operational', () => {
        cy.get(':nth-child(6) > .MuiInputBase-root > #outlined-basic')
        .type('McTest')
        cy.wait(500)
    })

    it('Password field operational', () => {
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('password')
        cy.wait(500)
    })

    it('Confirm Password field operational', () => {
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('password')
        cy.wait(500)
    })

    it('Submit button functioning', () => {
        cy.get('.MuiButton-label')
        .click()
        cy.url()
        .should('include', '/login')
    })
  

   
      // @ts-ignore TS2339
    //   cy.get('button').console('info').then(($button) => {
    //     // subject is still $button
    //   })
    // })
  })
  