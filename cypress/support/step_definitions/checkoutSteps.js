import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";

// ===== Common Steps =====
Given("I open the Magento home page", () => {
  HomePage.visit();
});

// ===== Checkout Flow =====
When("I select a product and add it to the cart", () => {
  HomePage.searchProduct("Joust Duffle Bag");
  ProductPage.selectFirstProduct();
  ProductPage.addToCart();
});

When("I proceed to checkout and fill in the details", () => {
  ProductPage.goToCart();
  CheckoutPage.fillCustomerDetails();
});

Then("I should see the order confirmation", () => {
  CheckoutPage.placeOrder();
  CheckoutPage.verifyOrderConfirmation();
});

Then("I save the order ID", () => {
  cy.get(".checkout-success > :nth-child(1) > span").then(order => {
    cy.log("Order ID:", order.text());
    cy.writeFile("cypress/reports/orderId.txt", order.text());
  });
});

// ===== Login & Logout =====
When("I click on the Sign In link", () => {
  HomePage.clickSignIn();
});

When("I enter the login credentials with username {string} and password {string}", (username, password) => {
  cy.get("#email").type(username);
  cy.get("#pass").type(password);
  cy.get("#send2").click();
});

Then("I should be logged in successfully", () => {
  cy.contains("My Account").should("be.visible");
});

Then("I click on Sign Out and redirected to the home page", () => {
  cy.get(".customer-name").click();
  cy.contains("Sign Out").click();
  cy.url().should("eq", "https://magento2-demo.scandiweb.com/");
});

// ===== Search =====
When("I search for {string}", (product) => {
  HomePage.searchProduct(product);
});

Then("I should see search results containing {string}", (product) => {
  cy.get(".product-item-link").should("contain.text", product);
});

// ===== Failed Scenarios =====
Then("the cart should be empty", () => {
  cy.get(".counter-number").should("have.text", "0"); // ❌ will fail if item added
});

Then("I should see an error message {string}", (message) => {
  cy.contains(message).should("be.visible"); // ❌ wrong text will fail
});
