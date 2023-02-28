describe ("On Sauce", () => {
    it ("AddToCart", () => {
        //Test de adaugare al unui produs in cart (adaugi produsul in cart si verifici daca s-a
        //adaugat)

        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        if(cy.get('.shopping_cart_badge').should("be.visible"))
        {
            console.log("Avem produs adaugat")
        }
        cy.get('.shopping_cart_link').click();
    })
})