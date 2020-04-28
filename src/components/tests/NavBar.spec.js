import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavBar } from '../NavBar';

// Nav Bar	
// 1. Structural	
//   a. Is the nav bar being rendered? DONE
//   b. Does sessionStorage remove ‘navState’?	
//   C. Does sessionStorage remove ‘userID’?
//   D. Does sessionStorage remove ‘LinkedAccount’?	
//   E. Does handleClick make setAnchorEl = event.currentTarget?	
//   F. Does handleClose make setAnchor = null?
  

// 2. Interaction	
//   a. What do we do if a user tries to click a link like logout and doesnt get loged out or can still         see account?	
//   b. What do we do if a user doesn't get all session storage removed?	
//   c. What do we do if the navState from redux and logout events  don't match?	
//   d. What if theres no redirection from the mini menu or with the logout button?	

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