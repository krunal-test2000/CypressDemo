class ProductPage {
  selectFirstProduct() {
    cy.get(".product-image-photo").first().click();
  }

  addToCart() {
    cy.get("#product-addtocart-button").click();
    cy.get(".message-success").should("be.visible");
  }

  goToCart() {
    cy.get('.message-success > div > a').should("be.visible").click();
   // cy.get(".showcart").click();
    cy.contains("Proceed to Checkout").should("be.visible").click();
  }
}

export default new ProductPage();
