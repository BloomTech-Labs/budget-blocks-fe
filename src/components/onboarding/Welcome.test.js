import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from "@testing-library/react";
import Welcome from './Welcome'


test('Test text does exist', () => {

    const {getByText} = render(<Router><Welcome /></Router>)

    expect(getByText(/financial/i)).toBeTruthy()
    expect(getByText(/flow/i)).toBeTruthy()
    expect(getByText(/freedom/i)).toBeTruthy()
})