describe ("On sauce", () => {
    it("Test Menu", () => {
        //Test prin care verifici daca se poate deschide si inchide meniul lateral
        
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get("#react-burger-menu-btn").click();
        cy.wait(5000);
        cy.get("#react-burger-cross-btn").click();
})
})