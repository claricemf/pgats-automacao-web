import { fa, faker } from '@faker-js/faker';
import register from '../modules/register';
import home from '../modules/home';
import login from '../modules/login';
import contact from '../modules/contact';
import userData from '../fixtures/example.json'; 
import products from '../modules/products';
import cart from '../modules/cart';

describe('Automation Exercise', () => {
    it('Test Case 1: Register User', () => {
        home.visitHomePage();
        home.visitSignupLogin();
        const name = userData.name;
        const email = userData.email;
        register.fillRegisterForm(name, email);
        register.completeRegistrationDetails();
        register.submitRegistration();
        register.verifyAccountCreated();
        register.clickContinueButton();
        register.verifyUserLoggedIn(name);
        register.clickDeleteAccount();  
        register.verifyAccountDeleted();
        register.clickContinueButton();
    });

    it('Test Case 2: Login User with correct email and password', () => {
        home.visitHomePage();
        home.visitSignupLogin();
        const name = userData.name;
        const email = userData.email;
        register.fillRegisterForm(name, email);
        register.completeRegistrationDetails();
        register.submitRegistration();
        register.clickContinueButton();
        home.logout();
        home.visitSignupLogin();
        login.fillLoginForm(email, '123456');
        register.verifyUserLoggedIn(name);
        register.clickDeleteAccount();  
        register.verifyAccountDeleted();
        register.clickContinueButton();
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        home.visitHomePage();
        home.visitSignupLogin();
        login.fillLoginForm(faker.internet.email(), 'wrongpassword');
        cy.get('p').contains('Your email or password is incorrect!').should('be.visible');
    });

    it('Test Case 4: Logout User', () => {
        home.visitHomePage();
        home.visitSignupLogin();
        login.fillLoginForm(Cypress.env("email"), '123456');
        register.verifyUserLoggedIn(Cypress.env("name"));
        home.logout();
    });

    it('Test Case 5: Register User with existing email', () => {
        home.visitHomePage();
        home.visitSignupLogin();
        register.fillRegisterForm(Cypress.env("name"), Cypress.env("email"));
        register.verifyEmailAlreadyExist();
    });

    it('Test Case 6: Contact Us Form', () => {
        home.visitHomePage();
        home.visitContactUs();
        contact.verifyContactUsPageVisible();
        contact.fillContactForm(
            userData.name, 
            userData.email,
            userData.subject,
            userData.message
        );
        contact.submitContactForm();
        home.clickHomeButton();

    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        home.visitHomePage();
        home.visitProductsPage();
        products.verifyProductListVisible();
        products.clickFirstProductViewButton();
        products.verifyFirstProductDetailVisible();
        products.verifyDetailInformationFirstProduct();
    });

    it('Test Case 9: Search Product', () => {
        home.visitHomePage();
        home.visitProductsPage();
        products.searchProduct("graphic");
        products.verifySearchedProductsVisible();
        products.verifyOnlySearchedProductsDisplayed("GRAPHIC DESIGN MEN T SHIRT - BLUEGRAPHIC DESIGN MEN T SHIRT - BLUE");
        
    });

    it('Test Case 10: Verify Subscription in home page', () => {
        home.visitHomePage();
        home.verifySubscriptionVisible();
        home.inputEmailSubscription(faker.internet.email());
        home.submitSubscription();
        home.verifySubscriptionSuccessMessage();
        
    });

    it('Test Case 15: Place Order: Register before Checkout', () => {
        home.visitHomePage();
        home.visitSignupLogin();
        const name = userData.name;
        const email = userData.email;
        register.fillRegisterForm(name, email);
        register.completeRegistrationDetails();
        register.submitRegistration();
        register.verifyAccountCreated();
        register.clickContinueButton();
        register.verifyUserLoggedIn(name);
        home.visitProductsPage();
        products.addFirstProductToCart();
        products.continueShopping();
        home.visitCartPage();
        cart.proceedToCheckout(); 
        cart.verifyAddressDetailsVisible();
        cart.inputMessageToSeller("Teste Mensagem");
        cart.submitOrder();
        cart.fillPaymentDetails(
            "John Doe",
            "4111111111111111", 
            "123",
            "12",
            "2025");
        cart.submitPayment();
        register.clickDeleteAccount();  
        register.verifyAccountDeleted();
        register.clickContinueButton();
    });
    
});