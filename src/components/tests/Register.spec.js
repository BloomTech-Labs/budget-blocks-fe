import React from "react";
import { Register } from "../Form_Components/Register/Register";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CredentialsContext from "../../contexts/CredentialsContext";

configure({ adapter: new Adapter() });

describe("Register page renders as expected", () => {
  const wrapper = mount(
    <CredentialsContext.Provider
      value={{
        email: "registertest@gmail.com",
        password: "password",
        updateCredentials: {
          email: "registertest@gmail.com",
          password: "password",
        },
      }}
    >
      <Router>
        <Register />
      </Router>
    </CredentialsContext.Provider>
  );

  let passInput = wrapper.find("#password").first();
  let confirmPassInput = wrapper.find("#confirmPassword").first();
  let emailInput = wrapper.find("#email").first();
  let fName = wrapper.find("#firstName").first();
  let lName = wrapper.find("#lastName").first();
  let inputButton = wrapper.find("#formButton").first();

  test("Form title is Create Profile", () => {
    expect(wrapper.find("Title").text()).toBe("Create Profile");
  });
  describe("Register Page renders all needed inputs", () => {
    test("First Name", () => {
      expect(fName.prop("label")).toBe("First Name");
      expect(fName.prop("placeholder")).toBe("First Name");
    });

    test("Last Name", () => {
      expect(lName.prop("label")).toBe("Last Name");
      expect(lName.prop("placeholder")).toBe("Last Name");
    });

    test("Email Input", () => {
      expect(emailInput.prop("label")).toBe("Email");
      expect(emailInput.prop("placeholder")).toBe("Email");
    });

    test("Confirm Password", () => {
      expect(confirmPassInput.prop("label")).toBe("Confirm Password");
      expect(confirmPassInput.prop("placeholder")).toBe("Confirm Password");
    });
    test("Password", () => {
      expect(passInput.prop("label")).toBe("Password");
      expect(passInput.prop("placeholder")).toBe("Password");
    });

    test("Password visibility toggles", () => {
      expect(passInput.find("#passwordVisibilityToggle").first().exists()).toBe(
        true
      );
      expect(
        confirmPassInput.find("#passwordVisibilityToggle").first().exists()
      ).toBe(true);
    });
  });
  describe("Register Page renders form submit button", () => {
    test("Button", () => {
      expect(inputButton.prop("label")).toBe("Sign-Up Button");
      expect(wrapper.find("Button").text()).toBe("Continue");
    });
  });
});



test("Register renders correctly", () => {
  const wrapper = shallow(<Register />);
  expect(wrapper.exists()).toBe(true);
});


test("Form errors when passwords do not match", () => {
  const callAPI = jest.fn();
  const wrapper = mount(
    <Router>
      <Register registerUser={callAPI} />
    </Router>
  );

  let passInput = wrapper.find("input").first();
  let emailInput = wrapper.find("input").first();
  let fName = wrapper.find("input").first();
  let lName = wrapper.find("input").first();
  let confirmPassInput = wrapper.find("input").first();

  fName.simulate("change", { target: { value: "FName", name: "first_name" }});
  lName.simulate("change", { target: { value: "LName", name: "last_name" }});
  passInput.simulate("change", { target: { value: "true", name: "password" }});
  emailInput.simulate("change", { target: { value: "tests@gmail.com", name: "email" }});
  confirmPassInput.simulate("change", {target: { value: "false", name: "confirmPassword"}});
  wrapper.find("form").simulate("submit");

  let errorText = wrapper.find("p").first();

  
  test("Password Mismatch", () => {
    expect(errorText.props.children).toBe("Password Mismatch");
  });
  test("callAPI not called", () => {
    expect(callAPI).not.toHaveBeenCalled();
  });

});




describe("Register form submission tests", () => {
  const callAPI = jest.fn(); // Mocks our API call
  const history = createMemoryHistory();
  /*
  // app.test.js
  import { createMemoryHistory } from "history"; done
  import { Router } from "react-router"; done
  test("redirects to login page", () => { done
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App signedInUser={null} />
      </Router>,
      node
    );
    expect(history.location.pathname).toBe("/login");
  });
  */
  const wrapper = mount(
    <Router>
      <Register registerUser={callAPI} history={history} />
    </Router>
  );
  // wrapper.find => [<input>,<input>,...]

  let lName = wrapper.find("input").first();
  let passInput = wrapper.find("input").first();
  let emailInput = wrapper.find("input").first();
  let confirmPassInput = wrapper.find("input").first();
  let fName = wrapper.find("input").first();

  fName.simulate("change", { target: { value: "Fname", name: "first_name" } });
  lName.simulate("change", { target: { value: "Lname", name: "last_name" } });
  passInput.simulate("change", { target: { value: "true", name: "password" } });
  emailInput.simulate("change", {target: { value: "sendtests@gmail.com", name: "email" }});
  confirmPassInput.simulate("change", {target: { value: "true", name: "confirmPassword" }});
  wrapper.find("form").simulate("submit");

  test("Form calls api when form is filled out correctly", () => {
    expect(callAPI).toHaveBeenCalled(); // assertion
  });
  test("Register button redirects to /onBoard/1", () => {
    // console.log(mockHistory.push.mock.calls) // => ["/","..."]
    expect(window.location.pathname).toBe("/onBoard/1");
  });
});
