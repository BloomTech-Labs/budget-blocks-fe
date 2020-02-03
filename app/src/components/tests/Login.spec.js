import React from "react";
import { Login } from "../login";
import { render, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom"

test('Login renders correctly',()=>{
    expect(render(
        <Router>
            <Login/>
        </Router>
    )).toMatchSnapshot();
});

test('When fields are empty and press sign in, sign in button disables',()=>{
    const { getAllByText, getByText } = render(
        <Router>
            <Login/>
        </Router>
    );
    const signInButton = getAllByText(/Sign In/i)[1];
    fireEvent.click(signInButton.parentElement);
    expect(signInButton.parentElement.hasAttribute("disabled")).toBe(true);
    const passHelpTxt = getByText(/password is required/i);
    expect(passHelpTxt.innerHTML).toBe("password is required");
    const emailHelpTxt = getByText(/email is required/i);
    expect(emailHelpTxt.innerHTML).toBe("email is required");
    
});