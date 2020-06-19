import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTransactions } from '../../hooks/useTransactions'
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from '../../styles/theme_provider';
import IncomeSvg from '../../media/Income.svg';

import { fetchTransactions } from '../../redux/actions/dashboardAction';


const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const user_id = window.localStorage.getItem('user_id');

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
    categoriesContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "21% 0% 0%"
    },
    backNextButtonWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "12% 0% 0%"
    },
    contentContainer: {
        width: "48%",
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
    const [categories, setCategories] = useState([])
    const [values, setValues] = useState([])
    const [goalsValue, setGoalsValue] = useState([])

    useEffect(() => {
        axios
            .get(`${SERVER_HOST}/plaid/userTransactions/${user_id}`)
            .then(res => {
                axios
                .post(`https://api.budgetblocks.org/transaction`, res.data)
                .then(res => {
                    setCategories(Object.keys(res.data.totals))
                    setValues(Object.values(res.data.totals))
                })
                .catch(err => {
                    console.log("DS Trans", err.message)
                })
        })
        .catch(err => {
            console.log("plaid_trans", err.message)
        })
    }, []);

    useEffect(() => {
        axios
            .get(`${SERVER_HOST}/api/goals/${user_id}`)
            .then(res => {
                setGoalsValue(Object.values(res.data))
        })
        .catch(err => {
            console.log("goals", err.message)
        })
    }, []);

    console.log(categories)
    console.log(values)
    console.log(goalsValue)
    
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
                <Typography className={classes.subSectionTitle}>Set your budget goals for basic expenses</Typography>
            </div>
            <Grid className={classes.categoriesContainer}>
                {/* 1 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[5]}</Typography>
                        </div>
                        <Typography>Actual: {values[5]}</Typography>
                        {goalsValue[2] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[2]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
                {/* 2 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[1]}</Typography>
                        </div>
                        <Typography>Actual: {values[1]}</Typography>
                        {goalsValue[1] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[1]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
                {/* 3 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[6]}</Typography>
                        </div>
                        <Typography>Actual: {values[6]}</Typography>
                        {goalsValue[9] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[9]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
                {/* 4 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[0]}</Typography>
                        </div>
                        <Typography>Actual: {values[0]}</Typography>
                        {goalsValue[3] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[3]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
                {/* 5 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[4]}</Typography>
                        </div>
                        <Typography>Actual: {values[4]}</Typography>
                        {goalsValue[4] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[4]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
                {/* 6 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[2]}</Typography>
                        </div>
                        <Typography>Actual: {values[2]}</Typography>
                        {goalsValue[7] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[7]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
                {/* 7 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[8]}</Typography>
                        </div>
                        <Typography>Actual: {values[8]}</Typography>
                        {goalsValue[6] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[6]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
                {/* 8 */}
                <Card className={classes.contentContainer}>
                    <CardContent>
                        <div>
                        <img src={IncomeSvg} alt="Category Name Icon"></img>
                        <Typography>{categories[7]}</Typography>
                        </div>
                        <Typography>Actual: {values[7]}</Typography>
                        {goalsValue[8] === null ? (
                        <Typography>Set Goal</Typography>
                        ) : (
                        <div>
                            <Typography>Goal: {goalsValue[8]}</Typography>
                        </div>)}
                    </CardContent>
                </Card>
            </Grid>
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