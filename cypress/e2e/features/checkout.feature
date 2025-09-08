Feature: Magento Checkout Flow

  Scenario: Verify placing an order with new customer
    Given I open the Magento home page
    When I select a product and add it to the cart
    And I proceed to checkout and fill in the details
    Then I should see the order confirmation
    And I save the order ID

  # Scenario: Verify user can log in and log out successfully
  #   Given I open the Magento home page
  #   When I click on the Sign In link
  #   And I enter the login credentials with username "reffufroupeufa-3635@yopmail.com" and password "i7KA#u7YRq3.7FP"
  #   Then I should be logged in successfully
  #   And I click on Sign Out and redirected to the home page

  # Scenario: Verify search shows results
  #   Given I open the Magento home page
  #   When I search for "bag"
  #   Then I should see search results containing "bag"

  # Scenario: Verify cart is empty after adding a product (FAIL)
  #   Given I open the Magento home page
  #   When I select a product and add it to the cart
  #   Then the cart should be empty


  # Scenario: Verify login with wrong credentials shows error
  #   Given I open the Magento home page
  #   When I click on the Sign In link
  #   And I enter the login credentials with username "wrong@yopmail.com" and password "wrongpass"
  #   Then I should see an error message "Invalid login or password123"
