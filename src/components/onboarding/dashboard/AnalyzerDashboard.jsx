import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, Grid, Box } from '@material-ui/core';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
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
  lowerContainer: {
    margin: '0 3%',
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
    margin: '3% 0 2% 0',
  },
  monthsButtonsBoxClass: {
    border: '1px solid black',
  },
  blocksButtonsBoxClass: {
    width: '55%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  incomeBoxClass: {
    width: '16%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3% 0 2% 0',
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
    return <ProgressBar totalPercent={10000} percentfilled={percentFilled} />;
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Typography variant="h6">Income ${income}</Typography>
              {/* <Box className={classes.incomeBoxClass}>
                <Typography>Category</Typography>
                <Typography>Total</Typography>
              </Box>
              <ProgressBar totalPercent={40} percentfilled={100} />
              <ProgressBar totalPercent={30} percentfilled={50} />
              <ProgressBar totalPercent={20} percentfilled={20} />
              <ProgressBar totalPercent={10} percentfilled={10} /> */}
              <TableContainer component={Paper}>
                <Table
                  padding="none"
                  style={{ width: '15%' }}
                  className={classes.table}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow style={{ width: '55%' }}>
                      <TableCell>
                        <Typography style={{ fontWeight: 'bold' }}>
                          Category
                        </Typography>
                      </TableCell>
                      <TableCell style={{ padding: '8%' }}>
                        <Typography style={{ fontWeight: 'bold' }}>
                          Total
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {totalsArray.map((item) => (
                      <TableRow key={item.category}>
                        <TableCell component="th" scope="row">
                          {item.category}
                        </TableCell>
                        <TableCell align="right" style={{ padding: '8%' }}>
                          ${item.value}
                        </TableCell>
                        <TableCell style={{ paddingLeft: '4%' }}>
                          {displayGraph(2000, item.value)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
