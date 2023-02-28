describe("On Superbet", () => {

    it("I can login", () =>{

        //Logare pe superbet
        cy.visit('https://superbet.ro/');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('.mobile-header-account-section__btn').click();
        cy.get('.input__field-box').type('username');
        cy.get('.password-input__field').type("password").type("{enter}");
        
        //Verificare oferta (nu functioneaza in totalitate)

        //cy.get('.mobile-subnav__item-text').click();
       // cy.get('[righticon="icon-chevron_down"] > .mobile-subnav__item-wrapper > .mobile-subnav__item-text').click();
        //cy.get('nav-sidebar-superbets__item nav-sidebar-superbets__item--special e2e-nav-sidebar-specials').click();
        //cy.get('.mobile-subnav__item--secondary > .mobile-subnav__item-wrapper').click();
       // cy.get('.time-filter__tab selected').click();
        
       //Verificarea ultimului bilet plasat
       
       cy.get('[href="/profil/bilete"]').click();
       cy.get('.type-switcher > :nth-child(2)').click();
       cy.get(':nth-child(3) > .accordion__item-header > .tickets-row').click();
      
    })

})