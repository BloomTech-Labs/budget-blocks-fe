/// <reference types="cypress" />
// npx cypress open
// npm install --save-dev cypress-image-snapshot
context('<Login>', () => { 
    beforeEach(() => cy.eyesOpen({appName: 'Budget Blocks'}))
    afterEach(() => cy.eyesClose())
    
    it('goes to login screen', () => {
        cy.visit('https://budgetblocks.org', { timeout: 10000 })
        cy.get('[href="/login"] > .MuiButtonBase-root').click()
        cy.wait(3000)
        cy.eyesCheckWindow('Login Screen')
    })

    it ('test email field is operational', ()=> {
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('test')
        cy.wait(6000)
        cy.eyesCheckWindow('Email Field1')
    })

    it ('password field is operational', ()=> {
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('password')
        cy.wait(9000)
        cy.eyesCheckWindow('Password Field')
    })

    it ('email field is operational', ()=> {
        // cy.matchImageSnapshot();
        // cy.screenshot({ x: 20, y: 20, width: 400, height: 300 })
       
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('0@test123.com')
        cy.wait(12000)
        cy.eyesCheckWindow('Email Field')
    })

    it ( 'logs in', () => {
        cy.get('.MuiButton-root').click()
        cy.wait(15000)
        cy.eyesCheckWindow('Logs')
    })

    it ('testing url upon logging in', () =>{
        cy.wait(1000)
        cy.url()
        .should('not.include', '/onBoarx/1')

        cy.wait(1000)
        cy.url()
        .should('include', '/onBoard/1')
        // cy.eyesCheckWindow('Link', {target: 'window', fully: true})
    })
  
})

