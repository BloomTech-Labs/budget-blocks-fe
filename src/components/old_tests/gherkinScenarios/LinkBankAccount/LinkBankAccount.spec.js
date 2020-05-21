import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/LinkBankAccount/LinkBankAccount.feature"
);

defineFeature(feature, (test) => {
  test("Linking a bank account", ({ given, when, then, and }) => {
    given(
      "I am an authenticated user on the dashboard page without a linked bank account",
      () => {}
    );

    when("I click the Link a Bank Account button", () => {});

    then("I should be able to connect my bank", () => {});

    and("I should be informed whether it was successful or not", () => {});

    and("I should be redirected to the dashboard page", () => {});

    and("I should see my linked bank account information", () => {});
  });

  test("Remove my linked bank account", ({ given, when, then }) => {
    given(
      "I am an authenticated user on the dashboard page with a linked bank account",
      () => {}
    );

    when("I click my linked my bank account information", () => {});

    then("I should be able to remove the bank account", () => {});
  });
});
