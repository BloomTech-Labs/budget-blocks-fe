import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/CreateProfile"
import { Switch, Route } from "react-router-dom";
import LinkAccount from "./components/LinkAccount";
import Dashboard from "./components/Dashboard";
import BudgetGoal from "./components/PresetModal";
import Navbar from "./components/NavBar"


function App() {
  
  return (
    <div>
    <Navbar /> 
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/link" component={LinkAccount} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/budgetModal" component={Blocks}/> */}

     


      </Switch>
    </div>
    </div>
  );
}

export default App;
