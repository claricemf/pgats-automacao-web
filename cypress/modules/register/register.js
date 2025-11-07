import { faker  } from '@faker-js/faker'

class Register{
    fillRegisterForm(nameTest, emailTest){     
        cy.get('h2').contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type(nameTest);
        cy.get('[data-qa="signup-email"]').type(emailTest);        
        cy.get('[data-qa="signup-button"]').click();
    }

    completeRegistrationDetails(){
        cy.get('h2').contains('Enter Account Information').should('be.visible');
        cy.get('input[type="radio"][value="Mr"]').check();
        cy.get('input#password').type('123456', {log: false});  
        cy.get('select#days').select('10');
        cy.get('select#months').select('May');
        cy.get('select#years').select('1990');

        cy.get('input[type="checkbox"]#newsletter').check();
        cy.get('input[type="checkbox"]#optin').check(); 

        cy.get('input#first_name').type(faker.person.firstName());
        cy.get('input#last_name').type(faker.person.lastName());
        cy.get('input#company').type(faker.company.name());
        cy.get('input#address1').type(faker.location.streetAddress());     
        cy.get('select#country').select('Canada');
        cy.get('input#state').type(faker.location.state());
        cy.get('input#city').type(faker.location.city());
        cy.get('input#zipcode').type(faker.location.zipCode());
        cy.get('input#mobile_number').type(faker.phone.number('+1##########'));
    }

    submitRegistration(){
        cy.get('button[data-qa="create-account"]').click();
    }

    verifyAccountCreated(){
        cy.get('h2[data-qa="account-created"]').should('be.visible').and('have.text', 'Account Created!');
    }

    verifyEmailAlreadyExist(){
        cy.get('p').contains('Email Address already exist!').should('be.visible');
    }

    clickContinueButton(){
        cy.get('a[data-qa="continue-button"]').click();
    }

    verifyUserLoggedIn(name){
        cy.get('li').contains(' Logged in as ').should('be.visible');
        cy.get('b').contains(name).should('be.visible');
    }

    clickDeleteAccount(){
        cy.get('a[href="/delete_account"]').click();
    }

    verifyAccountDeleted(){
        cy.get('h2[data-qa="account-deleted"]').should('be.visible').and('have.text', 'Account Deleted!');
    }

}

export default new Register()