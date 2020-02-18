import React from "react";
import { Login } from "../Form_Components/Login/Login";
import { render, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';

configure({ adapter: new Adapter() });

test('Login renders correctly',()=>{
    expect(render(
        <Router>
            <Login/>
        </Router>
    )).toMatchSnapshot();
});

// test('When fields are empty and press sign in, sign in button disables',()=>{
//     const callAPI = jest.fn();
//     const { getAllByText, getByText } = render(
//         <Router>
//             <Login loginUser={callAPI} />
//         </Router>
//     );
//     const signInButton = getAllByText(/Sign In/i)[1];
//     console.log(signInButton);
//     fireEvent.click(signInButton);
//     expect(signInButton.hasAttribute("disabled")).toBe(true);
//     const passHelpTxt = getByText(/password is required/i);
//     expect(passHelpTxt.innerHTML).toBe("password is required");
//     const emailHelpTxt = getByText(/email is required/i);
//     expect(emailHelpTxt.innerHTML).toBe("email is required");
//     expect(callAPI).not.toHaveBeenCalled();
    
// });

test('Changing the text inputs changes the values on screen',()=>{
    const callAPI = jest.fn();
    const wrapper = mount(
    <Router>
        <Login loginUser={callAPI} />
    </Router>
    );


    let passInput = wrapper.find("input").get(1);
    let emailInput = wrapper.find("input").get(0);

    wrapper.find("input").last().simulate('change',{ target: { value: 'test',name:"password" } });
    wrapper.find("input").first().simulate('change',{ target: { value: 'sendhelp@gmail.com',name:"email" } });

    passInput = wrapper.find("input").get(1);
    emailInput = wrapper.find("input").get(0);

    expect(passInput.props.value).toBe("test");
    expect(emailInput.props.value).toBe("sendhelp@gmail.com");
});

test('Form calls api when form is filled out',()=>{
    const callAPI = jest.fn();

    const wrapper = mount(
    <Router>
        <Login loginUser={callAPI} />
    </Router>
    );


    let passInput = wrapper.find("input").get(1);
    let emailInput = wrapper.find("input").get(0);
    let signInButton = wrapper.find("button").get(1);

    wrapper.find("input").last().simulate('change',{ target: { value: 'test',name:"password" } });
    wrapper.find("input").first().simulate('change',{ target: { value: 'sendhelp@gmail.com',name:"email" } });

    passInput = wrapper.find("input").get(1);
    emailInput = wrapper.find("input").get(0);

    expect(passInput.props.value).toBe("test");
    expect(emailInput.props.value).toBe("sendhelp@gmail.com");

    wrapper.find("form").simulate("submit");
    signInButton = wrapper.find("button").get(1);
    

    expect(signInButton.props.disabled).toBe(false);
    expect(callAPI).toHaveBeenCalled();
});