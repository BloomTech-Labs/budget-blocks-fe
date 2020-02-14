import React from "react";
import { Register } from "../register";
import { render, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';

configure({ adapter: new Adapter() });

test('Register renders correctly',()=>{
    expect(render(
        <Router>
            <Register/>
        </Router>
    )).toMatchSnapshot();
});

test('Form errors when passwords do not match',()=>{
    const callAPI = jest.fn();

    const wrapper = mount(
    <Router>
        <Register registerUser={callAPI} />
    </Router>
    );


    let passInput = wrapper.find("input").at(1);
    let emailInput = wrapper.find("input").at(0);
    let confirmPassInput = wrapper.find("input").at(2);

    passInput.simulate('change',{ target: { value: 'true',name:"password" } });
    emailInput.simulate('change',{ target: { value: 'sendtests@gmail.com',name:"email" } });
    confirmPassInput.simulate('change',{ target: { value: 'false',name:"confirmPassword" } });

    wrapper.find("form").simulate("submit");
    
    let errorText = wrapper.find("p").get(2);
    
    expect(errorText.props.children).toBe("Password Mismatch");
    expect(callAPI).not.toHaveBeenCalled();
});

// test('When fields are empty and press sign up, sign up button disables',()=>{
//     const callAPI = jest.fn();
//     const { getAllByText, getByText } = render(
//         <Router>
//             <Register registerUser={callAPI} />
//         </Router>
//     );
//     const signInButton = getAllByText(/Sign Up/i)[1];
//     fireEvent.click(signInButton.parentElement);
//     expect(signInButton.parentElement.hasAttribute("disabled")).toBe(true);
//     const passHelpTxt = getAllByText(/password is required/i)[0];
//     expect(passHelpTxt.innerHTML).toBe("password is required");
//     const emailHelpTxt = getByText(/email is required/i);
//     expect(emailHelpTxt.innerHTML).toBe("email is required");
//     expect(callAPI).not.toHaveBeenCalled();
    
// });

test('Form calls api when form is filled out correctly',()=>{
    const callAPI = jest.fn();

    const wrapper = mount(
    <Router>
        <Register registerUser={callAPI} />
    </Router>
    );


    let passInput = wrapper.find("input").at(1);
    let emailInput = wrapper.find("input").at(0);
    let confirmPassInput = wrapper.find("input").at(2);

    passInput.simulate('change',{ target: { value: 'true',name:"password" } });
    emailInput.simulate('change',{ target: { value: 'sendtests@gmail.com',name:"email" } });
    confirmPassInput.simulate('change',{ target: { value: 'true',name:"confirmPassword" } });

    wrapper.find("form").simulate("submit");
    
    expect(callAPI).toHaveBeenCalled();
});
