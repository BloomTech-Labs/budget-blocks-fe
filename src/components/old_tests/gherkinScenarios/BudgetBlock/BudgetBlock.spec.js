import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/BudgetBlock/BudgetBlock.feature"
);

defineFeature(feature, (test) => {
  test("Adding a budget block", ({ given, when, then, and }) => {
    given("I am an authenticated user on the dashboard page", () => {});

    when("I click the Add a Block button", () => {});

    then("I should be able to set the name of the block", () => {});

    and("I should be able to set the budget limit of the block", () => {});

    and("I should be able to save the new block or cancel it", () => {});

    and("I should be be redirected to the dashboard page", () => {});

    and("I should see my new budget block", () => {});
  });

  test("Editing a budget block", ({ given, when, then, and }) => {
    given("I am an authenticated user on the dashboard page", () => {});

    when("I click on a budget block", () => {});

    then("I should be able to change the name or limit of the block", () => {});

    and("I should be informed that my changes applied successfully", () => {});

    and("I should be redirected to the dashboard page", () => {});

    and("I should see my budget block with the changes I made", () => {});
  });

  test("Deleting a budget block", ({ given, when, then, and }) => {
    given("I am an authenticated user on the dashboard page", () => {});

    when("I click on a budget block", () => {});

    then("I should be able to delete the block", () => {});

    and("I should be asked to confirm", () => {});

    and("I should be redirected to the dashboard page", () => {});

    and("I should not see the block I deleted", () => {});
  });
});
