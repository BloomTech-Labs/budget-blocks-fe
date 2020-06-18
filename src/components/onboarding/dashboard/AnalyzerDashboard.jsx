import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, Grid, Box, Divider } from '@material-ui/core';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    wrap: 'nowrap',
  },
  topContainer: {
    textAlign: 'center',
    backgroundColor: 'rgba(19, 185, 172, 0.7)',
    color: 'white',
  },
  lowerContainer: {},
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
      marginTop: '1%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3%',
    },
  },
  balance: {
    marginBottom: '4%',
  },
  blocksButtonFalse: {
    backgroundColor: '#F6F6F6',
  },
  blocksButtonTrue: {
    color: 'white',
    backgroundColor: '#5ACEC5',
  },
  thirdContainer: {
    margin: '2% 3% 2% 3%',
  },
  monthsButtonsBoxClass: {
    border: '1px solid black',
  },
  blocksButtonsBoxClass: {
    width: '58.5%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  incomeBoxClass: {
    width: '17%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3% 0 2% 0',
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
}));

const AnalyzerDashboard = (props) => {
  const classes = useStyles();
  let totalsArray = [];
  const [activeComponent, setActiveComponent] = useState('budget');
  const [income, setIncome] = useState(0);
  const [categoriesNames, setCategoriesNames] = useState([]);
  const [categoriesValues, setCategoriesValues] = useState([]);

  const [incomeButtonClass, setIncomeButtonClass] = useState(false);
  const [housingButtonClass, setHousingButtonClass] = useState(false);
  const [foodBuButtonClass, setFoodButtonClass] = useState(false);
  const [carBuButtonClass, setCarButtonClass] = useState(false);
  const [personalBuButtonClass, setPersonalButtonClass] = useState(false);

  const setButtonsClasses = (
    IncomeButtonOn = false,
    HousingButtonOn = false,
    FoodButtonOn = false,
    CarButtonOn = false,
    PersonalButtonOn = false
  ) => {
    setIncomeButtonClass(IncomeButtonOn);
    setHousingButtonClass(HousingButtonOn);
    setFoodButtonClass(FoodButtonOn);
    setCarButtonClass(CarButtonOn);
    setPersonalButtonClass(PersonalButtonOn);
  };

  const combineCategoriesNamesWithValues = () => {
    let tempObj = {};

    for (let i = 0; i < categoriesNames.length; i++) {
      tempObj = {
        category: categoriesNames[i],
        value: Math.round(categoriesValues[i]),
      };
      if (tempObj.value != 0) {
        totalsArray.push(tempObj);
      }
    }
    return null;
  };

  const displayGraph = (totalValue, actualValue) => {
    const percentFilled = Math.round(totalValue / actualValue);
    return <ProgressBar totalPercent={100} percentfilled={30} />;
  };

  //This function sorts TotalsArrays from largest category value
  //to lowest
  const sortTotalsArray = () => {
    let tempObj = {};

    for (let i = 0; i < totalsArray.length; i++) {
      for (let j = i + 1; j < totalsArray.length; j++) {
        if (totalsArray[j].value > totalsArray[i].value) {
          tempObj = totalsArray[i];
          totalsArray[i] = totalsArray[j];
          totalsArray[j] = tempObj;
        }
      }
    }
  };

  const handleSpending = () => {
    setActiveComponent('spending');
  };

  const handleBudget = () => {
    setActiveComponent('budget');
  };

  const handleIncomeClick = (e) => {
    setButtonsClasses(true);
  };

  const handleHousing = (e) => {
    setButtonsClasses(false, true);
  };

  const handleFood = (e) => {
    setButtonsClasses(false, false, true);
  };

  const handleCar = (e) => {
    setButtonsClasses(false, false, false, true);
  };

  const handlePersonal = (e) => {
    setButtonsClasses(false, false, false, false, true);
  };

  console.log('user name', props.userInfo.name);

  useEffect(() => {
    const user_id = window.localStorage.getItem('user_id');
    const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

    axios
      .get(`${SERVER_HOST}/plaid/userTransactions/${user_id}`)
      .then((res) => {
        axios
          .post(`https://api.budgetblocks.org/transaction`, res.data)
          .then((categorizedTransactions) => {
            setIncome(categorizedTransactions.data.totals.Income);
            delete categorizedTransactions.data.totals.Income;
            setCategoriesNames(
              Object.keys(categorizedTransactions.data.totals)
            );
            setCategoriesValues(
              Object.values(categorizedTransactions.data.totals)
            );
          })
          .catch((err) => {
            console.log('error', err);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  combineCategoriesNamesWithValues();
  sortTotalsArray();

  return (
    <div className={classes.root}>
      <Grid container className={classes.topContainer}>
        <Grid item xs={12} className={classes.hiMessage}>
          Hi {props.userInfo.name}!
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Your balance is</Typography>
        </Grid>
        <Grid item xs={12} className={classes.balance}>
          <Typography variant="h3">${}</Typography>
        </Grid>
        <Grid item xs={12} classname={classes.buttonsClass}>
          <Button className={classes.componentButton} onClick={handleSpending}>
            {' '}
            Spending{' '}
          </Button>
          <Button className={classes.componentButton} onClick={handleBudget}>
            {' '}
            Budget{' '}
          </Button>
        </Grid>
      </Grid>
      <div>
        {activeComponent === 'budget' ? (
          <Box className={classes.lowerContainer}>
            <Grid
              style={{
                margin: '2% 3%',
              }}
              item
              xs={12}
            >
              <Box className={classes.monthsButtonsBoxClass}>
                <Button>May</Button>
                <Button>Jun</Button>
                <Button>Jul</Button>
                <Button>Aug</Button>
                <Button>Sep</Button>
                <Button>Oct</Button>
                <Button>Nov</Button>
                <Button>Dec</Button>
              </Box>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item xs={12} className={classes.thirdContainer}>
              <Typography style={{ fontWeight: 'bold' }}>Blocks</Typography>
              <Box className={classes.blocksButtonsBoxClass}>
                <Button
                  className={
                    incomeButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={handleIncomeClick}
                >
                  Income
                </Button>
                <Button
                  className={
                    housingButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handleHousing(e)}
                >
                  House
                </Button>
                <Button
                  className={
                    foodBuButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handleFood(e)}
                >
                  Food
                </Button>
                <Button
                  className={
                    carBuButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handleCar(e)}
                >
                  Car
                </Button>
                <Button
                  className={
                    personalBuButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handlePersonal(e)}
                >
                  Personal
                </Button>
              </Box>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item xs={12} style={{ margin: '0 3%' }}>
              <Typography variant="h6">Income ${income}</Typography>
              {/* <Box className={classes.incomeBoxClass}>
                <Typography
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Category
                </Typography>
                <Typography
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Total
                </Typography>
              </Box>
              {totalsArray.map((item) => (
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography>{item.category}</Typography>
                  <Typography style={{ padding: '0 3%' }}>
                    {item.value}
                  </Typography>
                  {displayGraph(2000, item.value)}
                </Box>
              ))} */}
            </Grid>
          </Box>
        ) : (
          <h1>Spending button was clicked</h1>
        )}
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

export default connect(mapStateToProps, {})(AnalyzerDashboard);
