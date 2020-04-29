Feature: Linking a bank account to my profile

    Scenario: Linking a bank account
        Given I am an authenticated user on the dashboard page without a linked bank account
        When I click the Link a Bank Account button
        Then I should be able to connect my bank
        And I should be informed whether it was successful or not
        And I should be redirected to the dashboard page
        And I should see my linked bank account information

    Scenario: Remove my linked bank account
        Given I am an authenticated user on the dashboard page with a linked bank account
        When I click my linked my bank account information
        Then I should be able to remove the bank account