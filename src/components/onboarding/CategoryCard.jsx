import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import IncomeSvg from '../../media/Income.svg';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
const user_id = window.localStorage.getItem('user_id');

const CategoryCard = ({catName,catValue}) => {

    const [goals, setGoals] = useState([])
    
    useEffect(() => {
        axios
            .get(`${SERVER_HOST}/api/goals/${user_id}`)
            .then(res => {
                setGoals([res.data])
        })
        .catch(err => {
            console.log("goals", err.message)
        })
    }, []);

    console.log(goals)

    return (  
        <Card style={{width: "40%"}}>
            <CardContent>
                <div>
                <img src={IncomeSvg} alt="Category Name Icon"></img>
                <Typography>{catName}</Typography>
                </div>
                <Typography>Actual: {catValue}</Typography>
                {goals ? (
                <Typography>Set Goal</Typography>
                ) : (
                <div>
                    {goals &&
                    goals.map((data) => (
                      <Typography>Goal: {data.personal}</Typography>
                    ))}
                </div>)}
            </CardContent>
        </Card>
    );
};
export default CategoryCard;