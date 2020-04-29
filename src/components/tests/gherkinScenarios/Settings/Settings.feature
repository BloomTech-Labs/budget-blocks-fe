Feature: User Settings

    Scenario: Access the user settings
        Given I am an authenticated user
        When I click the settings link
        Then I should have access to my personal settings

    Scenario: Change user settings
        Given As an authenticated user on the settings page
        When I change and save a setting
        Then I should be informed that the settings were successfully updated
        And My settings should be updated

    Scenario: Forget to save my settings changes
        Given I am an authenticated user on the settings page
        When I change a setting and try to exit without saving
        Then I should be informed that I forgot to change my settings
        And I should be given a chance to save my settings or cancel my changes
