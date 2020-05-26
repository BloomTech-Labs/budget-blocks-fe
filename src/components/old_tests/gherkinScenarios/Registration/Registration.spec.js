import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/Registration/Registration.feature"
);

defineFeature(feature, (test) => {
  test("Creating a new account", ({ given, when, then }) => {
    given("I am an unauthenticated user on the registration page", () => {});

    when("I fill out all the form fields correctly", () => {});

    then(
      "When I submit the form I should be redirected to the dashboard page",
      () => {}
    );
  });

  test("Registering with an email that already has an account", ({
    given,
    when,
    then,
    and,
  }) => {
    given("I am an unauthenticated user on the registration page", () => {});

    when(
      "I fill out the form with an email that already has an account",
      () => {}
    );

    then("I should be informed that the user already exists", () => {});

    and(
      "I should be given the option to log in or retrieve my password",
      () => {}
    );
  });
});
