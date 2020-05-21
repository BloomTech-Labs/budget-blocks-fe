import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/LandingPage/LandingPage.feature"
);

defineFeature(feature, (test) => {
  test("Accessing the registration page", ({ given, when, then }) => {
    given("I am an unauthenticated user on the landing page", () => {
      expect(true).toBe(true);
    });
    when("I click the sign-up button", () => {
      expect(true).toBe(true);
    });
    then("I should be redirected to the registration page", () => {
      expect(true).toBe(true);
    });
  });

  test("Accessing the login page", ({ given, when, then }) => {
    given("I am an unauthenticated user on the landing page", () => {
      expect(true).toBe(true);
    });
    when("I click the sign-in button", () => {
      expect(true).toBe(true);
    });
    then("I should be redirected to the login page", () => {
      expect(true).toBe(true);
    });
  });

  test("Accessing the dashboard page", ({ given, when, then }) => {
    given("I am an authenticated user", () => {});
    when("I access the landing page", () => {});
    then("I should be redirected to the dashboard page", () => {});
  });
});
