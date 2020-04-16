import React from "react";
import { Register } from "../Form_Components/Register/Register";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CredentialsContext from "../../contexts/CredentialsContext";
/*
Tests
1. Structural
  a. Is the nav bar being rendered? ... might be a separate concern
  b. Does the form title say "Create Profile"?
  c. Are all the inputs we need being rendered?
  D. Do the password inputs render as password inputs?
  e. Do the password inputs have the "reveal password" toggles?
  f. Does the submit button get rendered with the text "Cotinue"?
2. Interaction
  a. What do we do if a user tries to register with an email that is already registered?
  b. What do we do if a user tries to enter an invalid email address?
  c. What do we do if the Password and Confirm Password inputs don't match?
  d. Where do we get redirected once we hit continue?
  e. What happens if any of the inputs are not filled in when the user clicks continue?
*/

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

// describe("Register page behaves as expected on user input", () => {

// })

// test("Register renders correctly", () => {
//   const wrapper = shallow(<Register />);
//   expect(wrapper.exists()).toBe(true);
// });

// test("Form errors when passwords do not match", () => {
//   const callAPI = jest.fn();
//   const wrapper = mount(
//     <Router>
//       <Register registerUser={callAPI} />
//     </Router>
//   );
//   let passInput = wrapper.find("input").at(3);
//   let emailInput = wrapper.find("input").at(0);
//   let fName = wrapper.find("input").at(1);
//   let lName = wrapper.find("input").at(2);
//   let confirmPassInput = wrapper.find("input").at(4);
//   fName.simulate("change", { target: { value: "FName", name: "first_name" } });
//   lName.simulate("change", { target: { value: "LName", name: "last_name" } });
//   passInput.simulate("change", { target: { value: "true", name: "password" } });
//   emailInput.simulate("change", {
//     target: { value: "sendtests@gmail.com", name: "email" },
//   });
//   confirmPassInput.simulate("change", {
//     target: { value: "false", name: "confirmPassword" },
//   });
//   wrapper.find("form").simulate("submit");
//   let errorText = wrapper.find("p").get(4);
//   expect(errorText.props.children).toBe("Password Mismatch");
//   expect(callAPI).not.toHaveBeenCalled();
// });
// describe("Register form submission tests", () => {
//   const callAPI = jest.fn(); // Mocks our API call
//   const history = createMemoryHistory();
//   /*
//   // app.test.js
//   import { createMemoryHistory } from "history"; done
//   import { Router } from "react-router"; done
//   test("redirects to login page", () => { done
//     const history = createMemoryHistory();
//     render(
//       <Router history={history}>
//         <App signedInUser={null} />
//       </Router>,
//       node
//     );
//     expect(history.location.pathname).toBe("/login");
//   });
//   */
//   const wrapper = mount(
//     <Router>
//       <Register registerUser={callAPI} history={history} />
//     </Router>
//   );
//   // wrapper.find => [<input>,<input>,...]
//   let fName = wrapper.find("input").at(1);
//   fName.simulate("change", { target: { value: "Fname", name: "first_name" } });
//   let lName = wrapper.find("input").at(2);
//   lName.simulate("change", { target: { value: "Lname", name: "last_name" } });
//   let passInput = wrapper.find("input").at(3);
//   passInput.simulate("change", { target: { value: "true", name: "password" } });
//   let emailInput = wrapper.find("input").at(0);
//   emailInput.simulate("change", {
//     target: { value: "sendtests@gmail.com", name: "email" },
//   });
//   let confirmPassInput = wrapper.find("input").at(4);
//   confirmPassInput.simulate("change", {
//     target: { value: "true", name: "confirmPassword" },
//   });
//   wrapper.find("form").simulate("submit");
//   test("Form calls api when form is filled out correctly", () => {
//     expect(callAPI).toHaveBeenCalled(); // assertion
//   });
//   test("Register button redirects to /onBoard/1", () => {
//     // console.log(mockHistory.push.mock.calls) // => ["/","..."]
//     expect(window.location.pathname).toBe("/onBoard/1");
//   });
// });
