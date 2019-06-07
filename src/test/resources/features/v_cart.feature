Feature: Very Products in cart
  As a very Customer
  I want to log into my account and search for a product
  And I want to be able to add the product into the basket

  Background: Given am on very login page

    Scenario: Log into my very account
      When I enter "sledge@gmail.com" as username and "Password" as password
      And I enter "SE1 2LX" as postcode
      And I click on Sign in button
      Then I should be successfully logged in

    Scenario: Search for a product and add it to my basket
      When I search for "NRCQW15" using the search bar
      And I click on the search button
      Then a product with the product number should be displayed

    Scenario: Adding product to the basket
      When I select No Mobile Phone Insurance
      And I click on the ADD TO BASKET button
      And I click on the GO TO BASKET button
      Then I should be taken to the basket page with the selected item in it

    Scenario: Checkout process
      When I click on CHECKOUT SECURELY button
      And I click continue on the delivery page
      And I click pay in full in the payment page
      And I select New credit/debit card and I click continue button
      And I select Yes to both questions on the following page
      And I click pay now button
      Then I should be taken to Payment Details page

    Scenario: Failed checkout
      When I enter wrong card details into the Details fields
      Then payment process should fail
