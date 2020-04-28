import { defineFeature, loadFeature } from "jest-cucumber";
import environmentUrls from "../../../../dispatch";
import request from "superagent";

const feature = loadFeature(
  "./src/components/tests/gherkinScenarios/Login/Login.feature"
);

defineFeature(feature, (test) => {
  let email;
  let password;
  let response;

  test("Logging into an existing account", ({ given, and, when, then }) => {
    given(/^I am an authenticated user and my email is (.*)$/, (arg0) => {
      email = arg0;
    });

    and(/^my password is (.*)$/, (arg0) => {
      password = arg0;
    });

    when("I access the log in page", async () => {
      response = await request.get("/login");
    });

    then("I submit valid credentials", async () => {
      //ask yourself, can we call this visually?
      response = await request.post(
        `${environmentUrls.base_url}/api/auth/login`,
        { email, password }
      );
      expect(response.data.token).toBeDefined();
    });
  });

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
