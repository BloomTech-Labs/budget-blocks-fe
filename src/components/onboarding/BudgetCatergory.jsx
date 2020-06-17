import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from '../../styles/theme_provider';

import { fetchTransactions } from '../../redux/actions/dashboardAction';

const customStyles = makeStyles({
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

const BudgetCategory = 
({
    transaction,
    fetchTransactions,
    location
}) => {

    const classes = customStyles();
    const buttonClasses = useStyles();
    const history = useHistory()
    const [totals, setTotals] = useState([])

    useEffect(() => {
        fetchTransactions();
    }, [location]);

    console.log("transaction", transaction)
    useEffect(() => {
      axios.post(`https://api.budgetblocks.org/transaction`, transaction)
      .then(res => {
        console.log("response", res)
      })
      .catch(err => {
        console.log("error", err)
      })
    }, [])

    console.log(totals)
    
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

            <div style={{textAlign: "center"}}>
                <Card>
                  <CardContent>
                  <Typography style={{fontSize: "3rem"}}></Typography>
                  </CardContent>
                </Card>
              
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

const mapStateToProps = (state) => {
    return {
      transaction: state.trans.transaction,
      isFetching: state.trans.isFetching,
      errors: state.trans.errors,
    };
};

export default connect(mapStateToProps, {
    fetchTransactions
  })(BudgetCategory)