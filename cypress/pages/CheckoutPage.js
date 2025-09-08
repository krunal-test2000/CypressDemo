class CheckoutPage {
  fillCustomerDetails() {
    cy.get('#customer-email').wait(3000).type("testuser@yopmail.com");
    cy.get('input[name="firstname"]').wait(2000).type("Test");
    cy.get('input[name="lastname"]').type("User");
    cy.get('input[name="street[0]"]').type("123 Test Street");
    cy.get('input[name="city"]').type("New York");
    cy.get('select[name="region_id"]').select("New York");
    cy.get('input[name="postcode"]').type("10001");
    cy.get('input[name="telephone"]').type("1234567890");
    cy.get('input[value="freeshipping_freeshipping"]').click();

    
  }

  placeOrder() {
       cy.get('button[data-role="opc-continue"]').click();
  }

  verifyOrderConfirmation() {
 cy.get(':nth-child(5) > div.primary > .action').should('be.visible').click();
    cy.contains("Thank you for your purchase!").should("be.visible");
  }
}

export default new CheckoutPage();
