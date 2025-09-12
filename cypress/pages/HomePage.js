class HomePage {
  visit() {
    cy.visit("https://magento2-demo.scandiweb.com/");
  }

  clickSignIn() {
     cy.get('a[href*="/customer/account/login"]').first().click();
  }

  searchProduct(productName) {
    cy.get("#search").type(`${productName}{enter}`);
  }
}

export default new HomePage();
