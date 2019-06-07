$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/v_cart.feature");
formatter.feature({
  "line": 1,
  "name": "Very Products in cart",
  "description": "As a very Customer\r\nI want to log into my account and search for a product\r\nAnd I want to be able to add the product into the basket",
  "id": "very-products-in-cart",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "Given am on very login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Log into my very account",
  "description": "",
  "id": "very-products-in-cart;log-into-my-very-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I enter \"slidefix@gmail.com\" as username and \"Password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"SE16 3LX\" as postcode",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "slidefix@gmail.com",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 46
    }
  ],
  "location": "v_cart.i_enter_as_username_and_as_password(String,String)"
});
formatter.result({
  "duration": 27168935500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE16 3LX",
      "offset": 9
    }
  ],
  "location": "v_cart.i_enter_as_postcode(String)"
});
formatter.result({
  "duration": 394483300,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_click_on_Sign_in_button()"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "Given am on very login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Search for a product and add it to my basket",
  "description": "",
  "id": "very-products-in-cart;search-for-a-product-and-add-it-to-my-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I search for \"NRCQW15\" using the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "a product with the product number should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "NRCQW15",
      "offset": 14
    }
  ],
  "location": "v_cart.i_search_for_using_the_search_bar(String)"
});
formatter.result({
  "duration": 1750500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.v_cart.i_search_for_using_the_search_bar(v_cart.java:44)\r\n\tat ✽.When I search for \"NRCQW15\" using the search bar(features/v_cart.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "v_cart.i_click_on_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "v_cart.a_product_with_the_product_number_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "Given am on very login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Adding product to the basket",
  "description": "",
  "id": "very-products-in-cart;adding-product-to-the-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I select No Mobile Phone Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on the ADD TO BASKET button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the GO TO BASKET button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be taken to the basket page with the selected item in it",
  "keyword": "Then "
});
formatter.match({
  "location": "v_cart.i_select_No_Mobile_Phone_Insurance()"
});
formatter.result({
  "duration": 92700,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_click_on_the_ADD_TO_BASKET_button()"
});
formatter.result({
  "duration": 108400,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_click_on_the_GO_TO_BASKET_button()"
});
formatter.result({
  "duration": 130300,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_should_be_taken_to_the_basket_page_with_the_selected_item_in_it()"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Given am on very login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "Checkout process",
  "description": "",
  "id": "very-products-in-cart;checkout-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I click on CHECKOUT SECURELY button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click continue on the delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click pay in full in the payment page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select New credit/debit card and I click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select Yes to both questions on the following page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be taken to Payment Details page",
  "keyword": "Then "
});
formatter.match({
  "location": "v_cart.i_click_on_CHECKOUT_SECURELY_button()"
});
formatter.result({
  "duration": 1750500,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_click_continue_on_the_delivery_page()"
});
formatter.result({
  "duration": 468300,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_click_pay_in_full_in_the_payment_page()"
});
formatter.result({
  "duration": 207400,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_select_New_credit_debit_card_and_I_click_continue_button()"
});
formatter.result({
  "duration": 65200,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_select_Yes_to_both_questions_on_the_following_page()"
});
formatter.result({
  "duration": 176200,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_click_pay_now_button()"
});
formatter.result({
  "duration": 65900,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.i_should_be_taken_to_Payment_Details_page()"
});
formatter.result({
  "duration": 58800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Given am on very login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 34,
  "name": "Failed checkout",
  "description": "",
  "id": "very-products-in-cart;failed-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I enter wrong card details into the Details fields",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "payment process should fail",
  "keyword": "Then "
});
formatter.match({
  "location": "v_cart.i_enter_wrong_card_details_into_the_Details_fields()"
});
formatter.result({
  "duration": 84100,
  "status": "passed"
});
formatter.match({
  "location": "v_cart.payment_process_should_fail()"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
});