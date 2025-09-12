// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';
import 'cypress-mochawesome-reporter/register';

// ignore known errors (optional)
Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("Cannot read properties of undefined") ||
    err.message.includes("fullScreen")
  ) {
    return false; // prevent Cypress from failing
  }
});

// Attach screenshot + video for Allure
afterEach(function () {
  if (this.currentTest.state === "failed") {
    const testTitle = this.currentTest.title;

    cy.allure().logStep(`Test failed: ${testTitle}`);

    // Attach screenshot
    const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${testTitle} (failed).png`;
    cy.allure().fileAttachment("Screenshot", screenshotPath, "image/png");

    // Attach video
    const videoPath = `cypress/videos/${Cypress.spec.name}.mp4`;
    cy.allure().fileAttachment("Video", videoPath, "video/mp4");
  }
});
