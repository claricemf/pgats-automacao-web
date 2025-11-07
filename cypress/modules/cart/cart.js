class Cart{
    proceedToCheckout() {
        cy.scrollTo('right');
        cy.get('#do_action').within(() => {
            cy.get('a').contains('Proceed To Checkout').first().click();
        });
    }

    verifyAddressDetailsVisible() {
        cy.get('h2').contains('Address Details').should('be.visible');
        cy.get('#address_delivery').should('be.visible');
        cy.get('h3').contains('Your delivery address').should('be.visible');

        cy.get('#address_invoice').should('be.visible');
       cy.get('h3').contains('Your billing address').should('be.visible');
    }

    inputMessageToSeller(message) {
        cy.get('textarea[name="message"]').type(message);
    }

    submitOrder() {
        cy.get('a').contains('Place Order').click();
    }

    fillPaymentDetails(cardName, cardNumber, cvc, expiryMonth, expiryYear) {
        cy.get('input[name="name_on_card"]').type(cardName);
        cy.get('input[name="card_number"]').type(cardNumber);
        cy.get('input[name="cvc"]').type(cvc);
        cy.get('input[name="expiry_month"]').type(expiryMonth);
        cy.get('input[name="expiry_year"]').type(expiryYear);
    }

    submitPayment() {
        cy.get('#submit').click();
        cy.get('h2').contains('Order Placed!').should('be.visible');
    }
}
export default new Cart()