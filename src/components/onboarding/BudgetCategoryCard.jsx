import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const customStyles = makeStyles((theme) => ({
    mainContainer: {
        minWidth: '155px',
        height: '111px',
        /* Background color */
        background: 'rgba(200, 216, 215, 0.1)',
        border: '1px solid rgba(200, 216, 215, 0.46)',
        boxSizing: 'border-box',
        borderRadius: '3px',
        margin: "2%",
        
    },
    catNameDiv: {

        /* budget Input text */
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '18px',
        color: 'rgba(33, 36, 44, 0.5)',
        paddingLeft: '25%',
        paddingTop: '25%',
    },
    catValueDiv: {

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '18px',
        paddingLeft: '25%',

        color: '#959595',

    }
  
  }));

  /*

  TODOS:

  1) When the main container is clicked, the user needs to be redirected to component #12 in the figma files

  Within component #12:
    1) Develop the UI
    2) When a user save that budget goal, we need a backend route to store it

  2) Wether it be in the redux store or local storage we need a way to keep track of which budgeting goals users
    have set up in order to know when we need to set the background color of a budgetCategory card to teal

  3) Importing images for these cards

  4) Fix the UI to match the mobile figma files


  */

const BudgetCategoryCard = ({catName,catValue}) => {

    const classes = customStyles();

    return (
        
        <div className={classes.mainContainer}>
            <div>
                {/*<img src='../../media/house2.png' alt='budget icon'></img>*/}
                <div className={classes.catNameDiv}>{catName}</div>
            </div>
            
            <div className={classes.catValueDiv}>{catValue}</div>
        </div>
    );
};
export default BudgetCategoryCard;