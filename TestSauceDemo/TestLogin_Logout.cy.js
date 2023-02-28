describe("On sauce", () => {

    it ("I can logout", () => {
        //Test de logout (trebuie sa fii logat inainte sa poti da logout - dupa ce te loghezi ai in
        //stanga sus un meniu care contine logout)

        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();
    })
})