import React from "react";
import { Login } from "../Form_Components/Login/Login";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

configure({ adapter: new Adapter() });

test("Login renders correctly", () => {
  expect(
    render(
      <Router>
        <Login />
      </Router>
    )
  ).toMatchSnapshot();
});

describe("Changing the text inputs changes the values on screen", () => {
  const callAPI = jest.fn();
  const wrapper = mount(
    <Router>
      <Login loginUser={callAPI} />
    </Router>
  );

  let passInput = wrapper.find("input").first();
  let emailInput = wrapper.find("input").first();

  wrapper
    .find("input")
    .last()
    .simulate("change", { target: { value: "test", name: "password" } });
  wrapper
    .find("input")
    .first()
    .simulate("change", {
      target: { value: "sendhelp@gmail.com", name: "email" },
    });

  passInput = wrapper.find("input").first();
  emailInput = wrapper.find("input").first();

  test("Password Input", () => {
    expect(passInput.props.value).toBe("test");
  });

  test("Email Input", () => {
    expect(emailInput.props.value).toBe("sendhelp@gmail.com");
  });
});

describe("Form calls api when form is filled out", () => {
  const callAPI = jest.fn();

  const wrapper = mount(
    <Router>
      <Login loginUser={callAPI} />
    </Router>
  );

  let passInput = wrapper.find("input").first();
  let emailInput = wrapper.find("input").first();
  let signInButton = wrapper.find("button").first();

  wrapper.find("form").simulate("submit");
  wrapper
    .find("input")
    .last()
    .simulate("change", { target: { value: "test", name: "password" } });
  wrapper
    .find("input")
    .first()
    .simulate("change", {
      target: { value: "sendhelp@gmail.com", name: "email" },
    });

  passInput = wrapper.find("input").first();
  emailInput = wrapper.find("input").first();

  test("Password Input", () => {
    expect(passInput.props.value).toBe("test");
  });
  test("Email Input", () => {
    expect(emailInput.props.value).toBe("sendhelp@gmail.com");
  });
  test("Sign in Button", () => {
    expect(signInButton.props.disabled).toBe(false);
  });

  test("API Called", () => {
    expect(callAPI).toHaveBeenCalled();
  });
});
