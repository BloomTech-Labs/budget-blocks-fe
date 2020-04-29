Feature: Registration page

    Scenario: Creating a new account
        Given I am an unauthenticated user on the registration page
        When I fill out all the form fields correctly
        Then When I submit the form I should be redirected to the dashboard page

    Scenario: Registering with an email that already has an account
        Given I am an unauthenticated user on the registration page
        When I fill out the form with an email that already has an account
        Then I should be informed that the user already exists
        And I should be given the option to log in or retrieve my password