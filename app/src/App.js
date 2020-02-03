import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/Register";
import Profile from "./components/CreateProfile"
import { Switch, Route } from "react-router-dom";
import LinkAccount from "./components/LinkAccount";
import Dashboard from "./components/Dashboard"
<<<<<<< HEAD
import BudgetGoal from "./components/BudgetGoal";

=======
import Test from "./components/test"
>>>>>>> 4920a1d246e62e17b463abc29e3cb2d1d2bf10e0
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/link" component={LinkAccount}/>
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/budgetModal" component={BudgetGoal}/>

      </Switch>
    </div>
  );
}

export default App;
