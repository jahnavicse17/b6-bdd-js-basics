Feature: As a customer, I can able to navigate to walmart.com

@createanaccount
Scenario: Create an Account
Given I am on the https://www.walmart.com
When I move on Sign In Account
And I click on Create an account
Then I should see Create your Walmart account header

@signin
Scenario: Sign In
Given I am on the https://www.walmart.com
When I move on Sign In Account
And I click on Sign In
Then I should see Enter your email to sign in or create an account header

@reodermyitems
Scenario: Re-Order My Items
Given I am on the https://www.walmart.com
When I move on Re-order My Items
And I click on Re-order
Then I should see Your essentials will show up here for quick and easy reordering header