class CartPage {


    removeProductfromCart() {
        cy.get('a[class="action action-delete"]').should("be.visible").click();

    }
        checkCartEmpty() {
        cy.get(".cart-empty")
            .should("be.visible")
            .and("contain.text", "You have no items in your shopping cart.");

    }


} export default new CartPage();