import React,{useEffect,useState} from 'react';
import axios from "axios"
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    background:"lightgrey",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [categories,setCategories] = useState([])
      useEffect(() => {
          axios.get("https://lambda-budget-blocks.herokuapp.com/api/users/categories/1")
          .then(i => {
             setCategories(i.data.slice(Math.max(i.data.length - 3, 1)))
          })
        },[])
const P = styled.p`
  color:green;
  `
  const Button =styled.button`
background:lightgrey;
border:lightgrey;

  `
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
      <Typography variant="subtitle1" gutterBottom>
     </Typography>
     <Grid container spacing={3}>
        <Grid item xs={7}>
         <b>Savings Goal</b>
       </Grid>
        <Grid item xs={5}>
           <p></p>
          </Grid>
         {categories.length === 0 ? <p>Please make goals</p> :
         categories.map(i => (
             <>
         <Grid item xs={7}>
        <p>goal</p>
      </Grid>
      <Grid item xs={5}>
       <P>{i.id}</P>
<p>{i.category}</p>
       </Grid>
         </>
         )
         )
        }
  
              
      </Grid> 
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
}
