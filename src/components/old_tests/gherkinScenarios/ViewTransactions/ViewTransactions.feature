Feature: View my transactions

    Scenario: View my recent transactions
        Given I am an authenticated user
        When I access the dashboard page
        Then I should see my five most recent transactions
        And I should be able to select to see them by sorted by creation date or by transaction date