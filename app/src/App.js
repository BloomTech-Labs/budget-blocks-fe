import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        //TODO make dashboard private route 

      </Switch>
    </div>
  );
}

export default App;
