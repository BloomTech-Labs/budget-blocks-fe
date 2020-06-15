import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {
    TextField,
    Button,
    makeStyles,
    withStyles,
    Select,
    MenuItem,
} from '@material-ui/core';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        wrap: "nowrap",
    },
    topContainer: {
        textAlign: "center",
        backgroundColor: 'rgba(19, 185, 172, 0.7)',
        color: 'white',
    },
    componentButton: {
        fontSize: '1.4rem',
        lineHeight: '2.1rem',
        fontWeight: '500',
        textTransform: 'capitalize',
        color: 'white',
        width: '10rem',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    buttonsClass: {
        justifyContent: "center",
    },
    hiMessage: {
        [theme.breakpoints.up('md')]: {
            marginTop: "1%"
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "3%"
        },
    },
    balance: {
        marginBottom: "4%",
    }
}));

const AnalyzerDashboard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Grid container className={classes.topContainer}>
                        <Grid item xs={12} className={classes.hiMessage}><Typography variant="h5">Hi {props.userInfo.name}!</Typography></Grid>
                        <Grid item xs={12}><Typography variant="h6">Your balance is</Typography></Grid>
                        <Grid item xs={12} className={classes.balance}><Typography variant="h3">${}</Typography></Grid>
                        <Grid item xs={12} classname={classes.buttonsClass}>
                            <Button className={classes.componentButton} > Spending </Button>
                            <Button className={classes.componentButton} > Budget </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        transaction: state.trans.transaction,
        userInfo: state.users.userInfo,
    };
};

export default connect(mapStateToProps, {})(
    AnalyzerDashboard
);