/// <reference types="cypress" />
// npx cypress open

context('<Onboard>', () => { 
    // beforeEach(() => cy.eyesOpen({appName: 'Budget Blocks'}))
    // afterEach(() => cy.eyesClose())
    
    it('shows login screen', () => {
        cy.visit('https://budgetblocks.org', { timeout: 15000 })
        cy.get('[href="/login"] > .MuiButtonBase-root').click()
        cy.wait(1000)
    })

    it ('email field is operational', ()=> {
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('test0@test123.com')
        cy.wait(1000)
    })

    it ('password field is operational', ()=> {
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('password')
        cy.wait(1000)
    })

    it ( 'logs in', () => {
        cy.get('.MuiButton-root').click()
        cy.wait(1000)
    })

    it ('Displays Onboard', () =>{
        cy.wait(3000)
        cy.url()
        .should('include', '/onBoard/1')
    })

     it ( 'Budget Goals button clicks', () => {
        cy.get('.manualBudgetButton > button').click()
        cy.wait(1000)
    })

    it ( 'logout button works', () => {
        cy.get('a').click()
        cy.wait(1000)
    })

    it('shows login screen', () => {
        cy.visit('https://budgetblocks.org', { timeout: 10000 })
        cy.get('[href="/login"] > .MuiButtonBase-root').click()
        cy.wait(1000)
    })

    it ('email field is operational', ()=> {
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('test0@test123.com')
        cy.wait(1000)
    })

    it ('password field is operational', ()=> {
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('password')
        cy.wait(1000)
    })

    it ( 'logs in', () => {
        cy.get('.MuiButton-root').click()
        cy.wait(1000)
    })

    it ( 'Bank button clicks', () => {
        cy.get('.plaidButton').click()
        cy.wait(1000)
    })

})
