import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavBar } from '../NavBar';

test('Navbar renders correctly', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.exists()).toBe(true);
});

describe("removeSessionStorage tests", () => {

    //I want to test removeSessionStorage
    const callAPI = jest.fn(); // Mocks our API call
  
    const wrapper = mount(
      <Router>
        <NavBar removeSessionStorage={removeSessionStorage} />
      </Router>
    );
  
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
