import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/CreateProfile"
import { Switch, Route } from "react-router-dom";
import LinkAccount from "./components/LinkAccount";


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

      </Switch>
    </div>
  );
}

export default App;
