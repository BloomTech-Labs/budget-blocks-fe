import React from "react";
import { Register } from "../Form_Components/Register/Register";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { configure, mount, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
test('Register renders correctly',()=>{
  const wrapper = shallow(<Register />)
  expect(wrapper.exists()).toBe(true)
});
test("Form errors when passwords do not match", () => {
  const callAPI = jest.fn();
  const wrapper = mount(
    <Router>
      <Register registerUser={callAPI} />
    </Router>
  );
  let passInput = wrapper.find("input").at(3);
  let emailInput = wrapper.find("input").at(0);
  let fName = wrapper.find("input").at(1);
  let lName = wrapper.find("input").at(2);
  let confirmPassInput = wrapper.find("input").at(4);
  fName.simulate("change", { target: { value: "FName", name: "first_name" } });
  lName.simulate("change", { target: { value: "LName", name: "last_name" } });
  passInput.simulate("change", { target: { value: "true", name: "password" } });
  emailInput.simulate("change", {
    target: { value: "sendtests@gmail.com", name: "email" }
  });
  confirmPassInput.simulate("change", {
    target: { value: "false", name: "confirmPassword" }
  });
  wrapper.find("form").simulate("submit");
  let errorText = wrapper.find("p").get(4);
  expect(errorText.props.children).toBe("Password Mismatch");
  expect(callAPI).not.toHaveBeenCalled();
});
describe("Register form submission tests", ()=> {
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
    <Router >
      <Register registerUser={callAPI} history={history}/>
    </Router>
  );
  // wrapper.find => [<input>,<input>,...]
  let fName = wrapper.find("input").at(1);
  fName.simulate("change", { target: { value: "Fname", name: "first_name" } });
  let lName = wrapper.find("input").at(2);
  lName.simulate("change", { target: { value: "Lname", name: "last_name" } });
  let passInput = wrapper.find("input").at(3);
  passInput.simulate("change", { target: { value: "true", name: "password" } });
  let emailInput = wrapper.find("input").at(0);
  emailInput.simulate("change", {
    target: { value: "sendtests@gmail.com", name: "email" }
  });
  let confirmPassInput = wrapper.find("input").at(4);
  confirmPassInput.simulate("change", {
    target: { value: "true", name: "confirmPassword" }
  });
  wrapper.find("form").simulate("submit");
  test("Form calls api when form is filled out correctly", () => {
    expect(callAPI).toHaveBeenCalled(); // assertion
  });
  test("Register button redirects to /onBoard/1", () => {
    // console.log(mockHistory.push.mock.calls) // => ["/","..."]
    expect(window.location.pathname).toBe('/onBoard/1');
  });
});