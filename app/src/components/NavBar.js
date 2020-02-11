
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../media/images/Background.png"
import head from "../media/images/budget_blocks.png"
import "./table.css"
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background:"red"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className="navbar">
       
       <Grid container spacing={3}>
           
          <Grid item={8}><div className="images-container">
       <img className="image" src={logo}/> <img className="heading" src={head}/>
       </div>
       </Grid> 
       <Grid item={3}><div className="left">log out</div></Grid>
       </Grid> 
    </div>
  );
}