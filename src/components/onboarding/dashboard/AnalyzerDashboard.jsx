import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
    Button,
    makeStyles,
    Grid,
    Divider,
    Box
} from '@material-ui/core';
import ProgressBar from './ProgressBar'
import { connect } from 'react-redux';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        wrap: "nowrap",
    },
    topContainer: {
        textAlign: "center",
        backgroundColor: 'rgba(19, 185, 172, 0.7)',
        color: 'white',
    },
    lowerContainer: {
        margin: "0 3%",
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
    },
    blocksButtonFalse: {
        backgroundColor: "#F6F6F6"
    },
    blocksButtonTrue: {
        color: 'white',
        backgroundColor: '#5ACEC5'
    },
    thirdContainer: {
        margin: "3% 0 2% 0",
    },
    monthsButtonsBoxClass: {
        border: "1px solid black",
    },
    blocksButtonsBoxClass: {
        width: "54.5%",
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

const AnalyzerDashboard = (props) => {

    const classes = useStyles();
    const [activeComponent, setActiveComponent] = useState('budget');

    const [incomeButtonClass, setIncomeButtonClass] = useState(false);
    const [housingButtonClass, setHousingButtonClass] = useState(false);
    const [foodBuButtonClass, setFoodButtonClass] = useState(false);
    const [carBuButtonClass, setCarButtonClass] = useState(false);
    const [personalBuButtonClass, setPersonalButtonClass] = useState(false);

    const handleSpending = () => {
        setActiveComponent('spending')
    };

    const handleBudget = () => {
        setActiveComponent('budget')
    };

    const setButtonsClasses = (IncomeButtonOn = false, HousingButtonOn = false, FoodButtonOn = false, CarButtonOn = false, PersonalButtonOn = false) => {
        setIncomeButtonClass(IncomeButtonOn);
        setHousingButtonClass(HousingButtonOn);
        setFoodButtonClass(FoodButtonOn);
        setCarButtonClass(CarButtonOn);
        setPersonalButtonClass(PersonalButtonOn);
    }

    const handleIncomeClick = (e) => {
        setButtonsClasses(true);
    }

    const handleHousing = (e) => {
        setButtonsClasses(false, true);
    }

    const handleFood = (e) => {
        setButtonsClasses(false, false, true);
    }

    const handleCar = (e) => {
        setButtonsClasses(false, false, false, true);
    }

    const handlePersonal = (e) => {
        setButtonsClasses(false, false, false, false, true);
    }

    return (
        <div className={classes.root}>
            <Grid container className={classes.topContainer}>
                <Grid item xs={12} className={classes.hiMessage}>Hi {props.userInfo.name}!</Grid>
                <Grid item xs={12}><Typography variant="h6">Your balance is</Typography></Grid>
                <Grid item xs={12} className={classes.balance}><Typography variant="h3">${}</Typography></Grid>
                <Grid item xs={12} classname={classes.buttonsClass}>
                    <Button className={classes.componentButton} onClick={handleSpending}> Spending </Button>
                    <Button className={classes.componentButton} onClick={handleBudget}> Budget </Button>
                </Grid>
            </Grid>
            <div>
                {activeComponent === 'budget' ? (
                    <Grid container className={classes.lowerContainer}>
                        <Grid item xs={12}>
                            <Box className={classes.monthsButtonsBoxClass}>
                                <Button style={{ border: "1px solid black", textAlign: "left" }}>May</Button>
                                <Button>Jun</Button>
                                <Button>Jul</Button>
                                <Button>Aug</Button>
                                <Button>Sep</Button>
                                <Button>Oct</Button>
                                <Button>Nov</Button>
                                <Button>Dec</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.thirdContainer}>
                            <Typography >Blocks</Typography>
                            <Box className={classes.blocksButtonsBoxClass}>
                                <Button className={incomeButtonClass ? classes.blocksButtonTrue : classes.blocksButtonFalse} onClick={handleIncomeClick}>Income</Button>
                                <Button className={housingButtonClass ? classes.blocksButtonTrue : classes.blocksButtonFalse} onClick={e => handleHousing(e)}>House</Button>
                                <Button className={foodBuButtonClass ? classes.blocksButtonTrue : classes.blocksButtonFalse} onClick={e => handleFood(e)}>Food</Button>
                                <Button className={carBuButtonClass ? classes.blocksButtonTrue : classes.blocksButtonFalse} onClick={e => handleCar(e)}>Car</Button>
                                <Button className={personalBuButtonClass ? classes.blocksButtonTrue : classes.blocksButtonFalse} onClick={e => handlePersonal(e)}>Personal</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography >Income ${}</Typography>
                            <ProgressBar totalPercent={10} percentfilled={0} />
                            <ProgressBar totalPercent={20} percentfilled={20} />
                            <ProgressBar totalPercent={30} percentfilled={50} />
                            <ProgressBar totalPercent={40} percentfilled={100} />
                        </Grid>
                    </Grid>
                ) : (<h1>Spending button was clicked</h1>)}
            </div>
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