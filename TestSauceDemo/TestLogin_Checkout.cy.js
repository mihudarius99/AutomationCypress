describe ("On sauce", () => {
    it("Checkout", () => {
        //Test prin careverifici daca poti sa comanzi un produs (adauga un produs in cos si
        //apoi urmeaza toti pasii de checkout pana la plasarea comenzii)
        
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.scrollTo('top');
        cy.get(".shopping_cart_link").click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type("Mihu");
        cy.get('[data-test="lastName"]').type("Darius");
        cy.get('[data-test="postalCode"]').type("515400");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
    })
})