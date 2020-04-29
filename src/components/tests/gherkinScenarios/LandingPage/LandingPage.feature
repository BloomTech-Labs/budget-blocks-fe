Feature: Landing Page

    Scenario: Accessing the registration page
        Given I am an unauthenticated user on the landing page
        When I click the sign-up button
        Then I should be redirected to the registration page

    Scenario: Accessing the login page
        Given I am an unauthenticated user on the landing page
        When I click the sign-in button
        Then I should be redirected to the login page

    Scenario: Accessing the dashboard page
        Given I am an authenticated user
        When I access the landing page
        Then I should be redirected to the dashboard page