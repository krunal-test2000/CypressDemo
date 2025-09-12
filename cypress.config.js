const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);

      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
  reporter: "cypress-mochawesome-reporter", 
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,  
    inlineAssets: true, 
    videoOnFailOnly: true      
  },
});
