class Home{
    visitHomePage(){
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#slider-carousel').should('be.visible');
    }

    visitSignupLogin(){
        cy.get('li').contains(' Signup / Login').should('be.visible');
        cy.get('a[href="/login"]').click();
    }

    visitContactUs(){
        cy.get('li').contains(' Contact us').should('be.visible');
        cy.get('a[href="/contact_us"]').click();
    }

    visitProductsPage(){
        cy.get('a[href="/products"]').click();
        cy.get('h2.title.text-center').contains('All Products').should('be.visible');
    }

    visitCartPage(){
        cy.scrollTo('top');
        cy.get('li').contains(' Cart').should('be.visible');
        cy.get('a[href="/view_cart"]').first().click();
        cy.get('li').contains('Shopping Cart').should('be.visible');
    }

    logout(){
        cy.get('li').contains(' Logout').should('be.visible');
        cy.get('a[href="/logout"]').click();
        cy.get('h2').contains('Login to your account').should('be.visible');
    }

    clickHomeButton(){
        cy.get('a').contains(' Home').click();
        cy.get('#slider-carousel').should('be.visible');
    }

    verifySubscriptionVisible(){
        cy.scrollTo('bottom');
        cy.get('h2').contains('Subscription').should('be.visible');
    }

    inputEmailSubscription(email){
        cy.get('input#susbscribe_email').type(email);
    }

    submitSubscription(){
        cy.get('#subscribe').click();
    }

    verifySubscriptionSuccessMessage(){
        cy.get('#success-subscribe').should('be.visible').and('contain.text', 'You have been successfully subscribed!');
    }
}
export default new Home()