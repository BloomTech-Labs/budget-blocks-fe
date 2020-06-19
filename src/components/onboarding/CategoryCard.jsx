import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CategoryCard = ({catName,catValue}) => {

    return (  
        <Card style={{width: "40%"}}>
            <CardContent>
                {/*<img src='../../media/house2.png' alt='budget icon'></img>*/}
                <Typography>{catName}</Typography>
                <Typography>{catValue}</Typography>
                {catName ? (
                <Typography>Set Goal</Typography>
                ) : (<div>Your Goal!</div>)}
            </CardContent>
        </Card>
    );
};
export default CategoryCard;