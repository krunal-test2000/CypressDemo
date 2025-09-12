import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";
import CartPage from "../../pages/CartPage";

Given("I open the Magento home page", () => {
  HomePage.visit();
});

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

When("I click on the Sign In link", () => {
  HomePage.clickSignIn();
});

When("I enter the login credentials with username {string} and password {string}", (username, password) => {
    cy.get("#email").should("be.visible").click();
  cy.get("body").then($body => {
    const popup = $body.find("#interactive-close-button-container:visible").first();
    if (popup.length > 0) {
      cy.get("#interactive-close-button-container:visible").first().click();
    }
  });
  cy.get("#email").should("be.visible").type(username);
  cy.get("#pass").type(password);
  cy.get("#send2").click();
});

Then("I should be logged in successfully", () => {
  cy.contains("Welcome,").should("be.visible");
});

Then("I click on Sign Out and redirected to the home page", () => {
  cy.get(".customer-name button[data-action='customer-menu-toggle']").first().click();
  cy.get(".customer-menu").contains("Sign Out").should("be.visible").click();
 
});

Then("I should see search results containing {string}", (product) => {
  cy.get(".page-title").should("contain.text", product.trim());
});

Then("I remove the product from the cart" , () => { 
    cy.get('.message-success > div > a').should("be.visible").click();
  CartPage.removeProductfromCart();
});

Then("I should see an error message",() => {
  cy.get("div[data-ui-id='message-error']").should("be.visible","The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."); 
});

Then("the cart should be empty", () => {
  CartPage.checkCartEmpty();
});