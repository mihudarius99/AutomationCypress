

describe('On Linkedin', () => {

    it("I can login",() => {
        cy.visit("https://www.linkedin.com");
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('YourEmail');
        cy.get('#password').type('YourPassword');
        cy.get('.btn__primary--large').click();
        cy.get('#ember15').should('exist');

    })




})