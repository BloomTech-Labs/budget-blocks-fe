import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/Login/Login.feature"
);

defineFeature(feature, (test) => {
  test("Logging into an existing account", ({ given, when, then, and }) => {
    given("I am an unauthenticated user", () => {});

    when("I access the log in page", () => {});

    then("I submit valid credentials", () => {});

    and("I should be redirected to the dashboard page", () => {});

    and("I should see my profile picture in the navigation bar", () => {});
  });

  test("Logging in with invalid credentials", ({ given, when, then }) => {
    given("I am an unauthenticated user on the log in page", () => {});

    when("I submit invalid credentials", () => {});

    then("I should be notified that my credentials were wrong", () => {});
  });
});
