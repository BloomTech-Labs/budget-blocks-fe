Feature: Log in page

    Scenario: Logging into an existing account
        Given I am an authenticated user and my email is meow@meow.com
        And my password is meow
        When I access the log in page
        Then I submit valid credentials

    Scenario: Logging in with invalid credentials
        Given I am an unauthenticated user on the log in page
        When I submit invalid credentials
        Then I should be notified that my credentials were wrong