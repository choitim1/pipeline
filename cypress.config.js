const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s8bj2s",
  projectId: "86btiu",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Tim report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    
    experimentalStudio: true,
    chromeWebSecurity: false,
    experimentalStudio: true,
    screenshotOnRunFailure : true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
