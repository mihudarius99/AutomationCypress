describe("On Sauce", () => {
    it ("I can login", () => {
        
        //Test de login cu userul standard (verifica daca esti logat apoi)


        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url("https://www.saucedemo.com/inventory.html").should('include', '/inventory.html');

    })

})