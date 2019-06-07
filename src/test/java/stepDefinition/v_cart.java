package stepDefinition;


import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import static junit.framework.TestCase.assertTrue;

public class v_cart {

    WebDriver driver = null;
    WebElement search = null;

    @When("^I enter \"([^\"]*)\" as username and \"([^\"]*)\" as password$")
    public void i_enter_as_username_and_as_password(String arg1, String arg2)  {

        System.setProperty("webdriver.chrome.driver", "C:\\mayProject\\May_Jat_Project-6e1f3c3061327d8a8324efc5130feb9311bf632e\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get ("https://www.very.co.uk/account/login.page?DPSLogout=true");

        driver.findElement(By.id("loginID")).sendKeys(arg1);
        driver.findElement(By.id("loginPassword")).sendKeys(arg2);

    }

    @When("^I enter \"([^\"]*)\" as postcode$")
    public void i_enter_as_postcode(String arg1)  {

        driver.findElement(By.id("loginPostcode")).sendKeys(arg1);
    }

    @When("^I click on Sign in button$")
    public void i_click_on_Sign_in_button()  {

        //driver.findElement(By.className("button")).click();

    }

    @Then("^I should be successfully logged in$")
    public void i_should_be_successfully_logged_in() throws Throwable {


    }



    @When("^I search for \"([^\"]*)\" using the search bar$")
    public void i_search_for_using_the_search_bar(String arg1)  {

        /* This part is used in testing the very search bar, since very won't allow me to log in.*/

        System.setProperty("webdriver.chrome.driver", "C:\\mayProject\\May_Jat_Project-6e1f3c3061327d8a8324efc5130feb9311bf632e\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get ("https://www.very.co.uk/account/login.page?DPSLogout=true");

        WebElement search = driver.findElement(By.name("header-searchInput"));
        search.sendKeys(arg1);
        //search.submit();

    }

    @When("^I click on the search button$")
    public void i_click_on_the_search_button() throws Throwable {

        driver.findElement(By.className("header-searchBtn")).click();

    }

    @Then("^a product with the product number should be displayed$")
    public void a_product_with_the_product_number_should_be_displayed()  {

        if(driver.getTitle().contains("Samsung"))
            //Pass
            System.out.println("Page title contains \"some expected text\" ");
        else
            //Fail
            System.out.println("Page title doesn't contains \"some expected text\" ");


    }

    @When("^I select No Mobile Phone Insurance$")
    public void i_select_No_Mobile_Phone_Insurance()  {

        System.setProperty("webdriver.chrome.driver", "C:\\mayProject\\May_Jat_Project-6e1f3c3061327d8a8324efc5130feb9311bf632e\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get ("https://www.very.co.uk/samsung-galaxynbsps10-black-128gb/1600348186.prd?_requestid=524750&Ntt=nrcqw15");

        driver.findElement(By.xpath("//*[@id=\"prod1088434676\"]/ul/li[3]/fieldset/ul/li[2]/label/span")).click();

    }

    @When("^I click on the ADD TO BASKET button$")
    public void i_click_on_the_ADD_TO_BASKET_button()  {

        driver.findElement(By.name("addToBasketButton")).click();

    }

    @When("^I click on the GO TO BASKET button$")
    public void i_click_on_the_GO_TO_BASKET_button()  {

        System.out.print("Enabled");
        WebDriverWait wait = new WebDriverWait(driver, 40);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By
                .xpath("//*[@id=\"goToBasket\"]")));

        driver.findElement(By.xpath("//*[@id=\"goToBasket\"]")).click();

    }

    @Then("^I should be taken to the basket page with the selected item in it$")
    public void i_should_be_taken_to_the_basket_page_with_the_selected_item_in_it()  {

    }

    @When("^I click on CHECKOUT SECURELY button$")
    public void i_click_on_CHECKOUT_SECURELY_button()  {

        System.setProperty("webdriver.chrome.driver", "C:\\mayProject\\May_Jat_Project-6e1f3c3061327d8a8324efc5130feb9311bf632e\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get ("https://www.very.co.uk/account/checkoutLogin.page?from=basket.page&_requestid=867625");

    }

    @When("^I click continue on the delivery page$")
    public void i_click_continue_on_the_delivery_page()  {

    }

    @When("^I click pay in full in the payment page$")
    public void i_click_pay_in_full_in_the_payment_page()  {

    }

    @When("^I select New credit/debit card and I click continue button$")
    public void i_select_New_credit_debit_card_and_I_click_continue_button()  {

    }

    @When("^I select Yes to both questions on the following page$")
    public void i_select_Yes_to_both_questions_on_the_following_page()  {

    }

    @When("^I click pay now button$")
    public void i_click_pay_now_button()  {

    }

    @Then("^I should be taken to Payment Details page$")
    public void i_should_be_taken_to_Payment_Details_page()  {

    }

    @When("^I enter wrong card details into the Details fields$")
    public void i_enter_wrong_card_details_into_the_Details_fields()  {

    }

    @Then("^payment process should fail$")
    public void payment_process_should_fail()  {

    }

}
