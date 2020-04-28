import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/Settings/Settings.feature"
);

defineFeature(feature, (test) => {
  test("Access the user settings", ({ given, when, then }) => {
    given("I am an authenticated user", () => {});

    when("I click the settings link", () => {});

    then("I should have access to my personal settings", () => {});
  });

  test("Change user settings", ({ given, when, then, and }) => {
    given("As an authenticated user on the settings page", () => {});

    when("I change and save a setting", () => {});

    then(
      "I should be informed that the settings were successfully updated",
      () => {}
    );

    and("My settings should be updated", () => {});
  });

  test("Forget to save my settings changes", ({ given, when, then, and }) => {
    given("I am an authenticated user on the settings page", () => {});

    when("I change a setting and try to exit without saving", () => {});

    then("I should be informed that I forgot to change my settings", () => {});

    and(
      "I should be given a chance to save my settings or cancel my changes",
      () => {}
    );
  });
});
