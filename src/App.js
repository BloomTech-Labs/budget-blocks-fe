import React from "react";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/CreateProfile"
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import BudgetGoal from "./components/BudgetGoalModal";



function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/budgetModal" component={BudgetGoal}/>

     


      </Switch>
    </div>
  );
}

export default App;
