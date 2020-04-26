Feature: Log in page

    Scenario: Logging into an existing account
        Given I am an unauthenticated user
        When I access the log in page
        Then I submit valid credentials
        And I should be redirected to the dashboard page
        And I should see my profile picture in the navigation bar

    Scenario: Logging in with invalid credentials
        Given I am an unauthenticated user on the log in page
        When I submit invalid credentials
        Then I should be notified that my credentials were wrong