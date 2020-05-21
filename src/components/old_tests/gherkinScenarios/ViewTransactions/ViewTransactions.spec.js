import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/ViewTransactions/ViewTransactions.feature"
);

defineFeature(feature, (test) => {
  test("View my recent transactions", ({ given, when, then, and }) => {
    given("I am an authenticated user", () => {});

    when("I access the dashboard page", () => {});

    then("I should see my five most recent transactions", () => {});

    and(
      "I should be able to select to see them by sorted by creation date or by transaction date",
      () => {}
    );
  });
});
