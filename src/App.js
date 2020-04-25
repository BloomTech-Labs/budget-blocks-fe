import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home";
import Login from "./components/Form_Components/Login/Login";
import Register from "./components/Form_Components/Register/Register";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar";
import SelectCategories from "./components/Form_Components/Select_Categories/SelectCategories";
import FirstOnboard from "./components/OnboardComponents/FirstOnboard";
import ManualBlocks from "./components/Blocks_Components/ManualBlocks";
import { PageView } from "./components/google_analytics/index.js";
import CredentialsContext from "./contexts/CredentialsContext";
import ExpenseList from "./components/no-bank/ExpenseList";

/* return <button onClick={methodDoesNotExist}>Break the world</button>; */
// function App() {
//   // we need our pageview function to run with a useEffect hook here
//   useEffect(() =>{
//     PageView()
//   })

// Added useContext because user email and password were being stored in localStorage (security risk) and we needed to resolve that.
function App() {
  const [credContext, setCredContext] = useState({ email: "", password: "" });
  const updateCredentials = (email, password) => {
    setCredContext({ email, password });
  };
  console.log('****************NODE_ENV******************', process.env.NODE_ENV )
  return (
    <div>
      <Navbar />

      <div className="App">
        <CredentialsContext.Provider
          value={{
            email: credContext.email,
            password: credContext.password,
            updateCredentials,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/onBoard/select" component={SelectCategories} />
            <Route path="/onBoard/1" component={FirstOnboard} />
            <Route path="/maggie" component={ExpenseList} />
            <PrivateRoute path="/manual" component={ManualBlocks} />
          </Switch>
        </CredentialsContext.Provider>
      </div>
    </div>
  );
}

export default App;
