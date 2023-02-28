describe ("On Sauce", () => {
    it ("DetailsProduct", () => {
        
        //Test prin care sa verifici daca poti accesa pagina cu detaliile unui produs (pagina
        //care apare cand dai click pe un produs)
        //Testeaza daca butonul “Back to products” de pe pagina unui produs te duce la
        //pagina principala

        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_img_link > .inventory_item_img').click();
        if (cy.get('#inventory_item_container').should('exist'))
        {
            console.log("Putem vedea detaliile produslui");
        }
        cy.get('[data-test="back-to-products"]').click();

        if(cy.url('https://www.saucedemo.com/inventory.html').should("exist"))
        {
            console.log("Butonul 'Back to products' ne duce pe pagina principala");
        }
    })
})