

describe('On Linkedin', () => {

    it("I can login",() => {
        cy.visit("https://www.linkedin.com");
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('dariusmihu99@gmail.com');
        cy.get('#password').type('Carlotnr1.');
        cy.get('.btn__primary--large').click();
        cy.get('#ember15').should('exist');

    })




})