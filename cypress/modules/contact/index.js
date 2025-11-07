class Contact {
    verifyContactUsPageVisible() {
        cy.get('h2').contains('Get In Touch').should('be.visible');
    }

    fillContactForm(name, email, subject, message) {
        cy.get('input[name="name"]').type(name);
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="subject"]').type(subject);
        cy.get('textarea[name="message"]').type(message);
        cy.fixture('example.json').as('arquivo')

        cy.get('input[type=file]').selectFile('@arquivo')
        //cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/imagem_teste.png');
    }

    submitContactForm() {
        cy.get('input[name="submit"]').click(); 
        cy.get('div.status.alert.alert-success').should('be.visible').and('contain', 'Success! Your details have been submitted successfully.');}

}

export default new Contact();