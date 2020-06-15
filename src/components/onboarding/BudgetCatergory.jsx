import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LensIcon from '@material-ui/icons/Lens';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    budgetContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: "5% 0% 0%"
    },
    budgetHeader: {
        color: '#000000',
        fontSize: '1.8rem',
        lineHeight: '2.7rem',
        fontWeight: '700',
        marginBottom: '20%',
    },
    skipButton: {
        fontSize: "1rem",
        fontFamily: "Poppins",
        fontWeight: "normal",
        lineHeight: "1.5",
        letterSpacing: "0.00938em",
        color: "rgba(0, 0, 0, 0.52)",
        margin: "1% 0% 0%"
    },
    mainHeader: {
        color: '#13B9AC',
        fontSize: '36px',
        lineHeight: '130.8%',
        fontWeight: '600',
    },
    sectionDescription: {
        color: '#000000',
        fontSize: '1.8rem',
        lineHeight: '2.7rem',
        fontWeight: 'normal',
    },
    subSectionTitle: {
        color: '#21242C',
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
        fontWeight: '600',
    },
    backNextButtonWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "12% 0% 0%"
    },
});

const BudgetCategory = () => {

    const classes = useStyles();
    const buttonClasses = useStyles();
    const history = useHistory()

    return (
        <Container>
            <div className={classes.budgetContainer}>
            <Typography className={classes.budgetHeader}>Budget</Typography>
            <Typography className={classes.skipButton}>Skip</Typography>
            </div>
            <div style={{ margin: "0% 0% 7%" }}>
                <Typography className={classes.mainHeader}>Build Your Budget</Typography>
            </div>
            <div style={{ margin: "0% 0% 10%" }}>
                <Typography className={classes.sectionDescription}>All of your linked bank account transactions are automatically sorted into basic categories</Typography>
            </div>
            <div>
                <Typography className={classes.subSectionTitle}>Set goals for basic expenses</Typography>
            </div>
            <div className={classes.backNextButtonWrapper}>
                <Button
                variant="contained"
                type="submit"
                className={buttonClasses.backButton}
                onClick={() => {
                    history.push('');
                }}
                >
                <KeyboardArrowLeft /> Back
                </Button>
                <Button
                variant="contained"
                type="submit"
                className={buttonClasses.nextButton}
                onClick={() => {
                    history.push('');
                  }}
                >
                Next <KeyboardArrowRight />
                </Button>
            </div>
        </Container>
    )
};

export default BudgetCategory