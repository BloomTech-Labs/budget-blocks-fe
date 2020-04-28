Feature: Budget blocks

    Scenario: Adding a budget block
        Given I am an authenticated user on the dashboard page
        When I click the Add a Block button
        Then I should be able to set the name of the block
        And I should be able to set the budget limit of the block
        And I should be able to save the new block or cancel it
        And I should be be redirected to the dashboard page
        And I should see my new budget block

    Scenario: Editing a budget block
        Given I am an authenticated user on the dashboard page
        When I click on a budget block
        Then I should be able to change the name or limit of the block
        And I should be informed that my changes applied successfully
        And I should be redirected to the dashboard page
        And I should see my budget block with the changes I made

    Scenario: Deleting a budget block
        Given I am an authenticated user on the dashboard page
        When I click on a budget block
        Then I should be able to delete the block
        And I should be asked to confirm
        And I should be redirected to the dashboard page
        And I should not see the block I deleted