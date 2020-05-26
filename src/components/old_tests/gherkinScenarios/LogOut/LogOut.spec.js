import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/LogOut/LogOut.feature"
);

defineFeature(feature, (test) => {
  test("Logging out of my account", ({ given, when, then, and }) => {
    given("I am an authenticated user", () => {});

    when("I click the log out button", () => {});

    then("I should be logged out of my account", () => {});

    and("I should be redirected to the home page", () => {});
  });
});
