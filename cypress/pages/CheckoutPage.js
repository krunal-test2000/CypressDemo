class CheckoutPage {
  fillCustomerDetails() {
    cy.get('input[name="firstname"]').type("Test");
    cy.get('input[name="lastname"]').type("User");
    cy.get('input[name="street[0]"]').type("123 Test Street");
    cy.get('input[name="city"]').type("New York");
    cy.get('select[name="region_id"]').select("New York");
    cy.get('input[name="postcode"]').type("10001");
    cy.get('input[name="telephone"]').type("1234567890");
    cy.get('input[name="username"]').type("testuser@yopmail.com");
  }

  placeOrder() {
    cy.contains("Place Order").click();
  }

  verifyOrderConfirmation() {
    cy.contains("Thank you for your purchase!").should("be.visible");
  }
}

export default new CheckoutPage();
