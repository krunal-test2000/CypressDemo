class ProductPage {
  selectFirstProduct() {
    cy.get(".product-item-link").first().click();
  }

  addToCart() {
    cy.get("#product-addtocart-button").click();
    cy.get(".message-success").should("be.visible");
  }

  goToCart() {
    cy.get(".showcart").click();
    cy.contains("Proceed to Checkout").click();
  }
}

export default new ProductPage();
