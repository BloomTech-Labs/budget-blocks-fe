Feature: Log out of my account

    Scenario: Logging out of my account
        Given I am an authenticated user
        When I click the log out button
        Then I should be logged out of my account
        And I should be redirected to the home page