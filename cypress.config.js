const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    baseUrl: 'https://automationexercise.com',
    email: 'email@test',
    senha: '123456',
    name: 'Usuario Teste'
  },
});