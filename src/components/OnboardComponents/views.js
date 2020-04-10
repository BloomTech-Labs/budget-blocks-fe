import React from "react";
import Balance from "../Balance_Components/Balance";
import Loader from "react-loader-spinner";

export const renderSpinner = () => (
  <div>
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  </div>
);

export const pushToDashboard = history => history.push("/dashboard");

export const renderManualBtn = ({ handleClick, error }) => (
  <div className="main">
    <p className="error">Sorry Please Try Again</p>
    <div className="manualBudgetButton">
      {error ? error : " "}
      <button onClick={handleClick}>Manually set your budget goals here</button>
    </div>
    <Balance />
  </div>
);
