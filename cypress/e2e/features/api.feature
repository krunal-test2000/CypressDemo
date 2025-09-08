Feature: API Scenarios
  
  Scenario: Verify GET API response and extract title
    When I send a GET request to the API endpoint and should receive a successful response
    Then I extract the title field from the response body

  Scenario: Verify Post API response and extract response value
    When I send a Post request to the API endpoint and should receive a successful response
    Then I extract the body field from the response body
