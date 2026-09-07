const { defineConfig } = require('cypress');

const base = process.env.CYPRESS_BASE_URL || process.env.BASE_URL || 'http://localhost:3000'

module.exports = defineConfig({
  e2e: {
    baseUrl: base,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
