import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const roles = {
    delete: "red",
    default: "#3BC14A", 
    deleteAndSave:"pink"
}

const BBButton = props => {

    const role = () => props.role ? roles[props.role] : roles.default

    const BBButton = styled(Button)({
        backgroundColor: role(),
        marginLeft: "20px",
        height: "42px",
        paddingLeft: "22px",
        paddingRight:"22px"
    });
    return (
    <BBButton
        {...props}
    />)
}




export default BBButton 