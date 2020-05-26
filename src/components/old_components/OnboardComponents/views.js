import React from "react";
import Balance from "../Balance_Components/Balance";
import Loader from "react-loader-spinner";
import ExpenseList from "../no-bank/ExpenseList";
export const renderSpinner = () => (
  <div>
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  </div>
);

export const pushToDashboard = (history) => history.push("/dashboard");

export const renderManualBtn = ({ handleClick, error }) => {
  return (
    <div className="main">
      <p className="error">Sorry Please Try Again</p>
      <div className="manualBudgetButton">
        <button onClick={handleClick}>
          Manually set your budget goals here
        </button>
      </div>
      <Balance />
    </div>
  );
};

// export const renderExpenseBtn = ({ handleClick, error }) => {
//   return (
//     <div className="main">
//       <p className="expenses">Click Here to Manually Add Expenses</p>
//       <div className="manualExpenseButton">
//         <button onClick={handleClick}>Manually add expenses here</button>
//       </div>
//       <ExpenseList />
//     </div>
//   );
// };
