

describe ('On SauceDemo', () =>{
    
    it ("I Can't login", () =>{
       
        //Test de login cu user sau parola gresita (verifica daca ai un mesaj de eroare)

        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('exist');
    })


})