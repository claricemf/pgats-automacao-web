class Products {
    verifyProductListVisible() {
        cy.get('.features_items').should('be.visible');
    }

    clickFirstProductViewButton() {
        cy.get('.product-image-wrapper').first().within(() => {
            cy.get('a').contains('View Product').click();
        });
    }

    verifyFirstProductDetailVisible() {
        cy.get('.product-details').should('be.visible');
    }

    verifyDetailInformationFirstProduct() {
        cy.get('.product-information').within(() => {
            cy.get('h2').contains('Blue Top').should('be.visible');
            cy.get('p').contains('Category: Women > Tops').should('be.visible');
            cy.get('span').contains('Rs. 500').should('be.visible');

            cy.get('p').contains(' In Stock').should('be.visible');
            cy.get('p').contains(' New').should('be.visible');
            cy.get('p').contains(' Polo').should('be.visible');
        });
    }

    searchProduct(productName) {
        cy.get('input#search_product').type(productName);
        cy.get('#submit_search').click();
        cy.get('.features_items').should('be.visible');
    }

    verifySearchedProductsVisible() {
        cy.get('h2.title.text-center').contains('Searched Products').should('be.visible');
    }

    verifyOnlySearchedProductsDisplayed(productName) {
        cy.get('.single-products').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('p').should('contain.text', productName);
            });
        });
    }

    addFirstProductToCart() {
        cy.get('.product-image-wrapper').first().within(() => {
            cy.get('a').contains('Add to cart').click();
        });
    }

    continueShopping() {
        cy.get('.modal-footer').within(() => {
            cy.get('button').contains('Continue Shopping').click();
        });
    }

}
export default new Products();