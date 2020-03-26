import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../../media/image/Logo.svg";
// import budgetImg from "../../media/image/budget_blocks.png";

const Title = ({ title }) => {
<<<<<<< HEAD
    // This component displays the Logo and the title of the component (used in login and register)
    return(
        <div className="logo_name">
            <img src={logo} className="logo-reg" alt="logo" />
            <img src={budgetImg} className="name-reg" alt="budget_blocks" />
            <Typography variant="h2" className="sign">
              {title}
            </Typography>
        </div>
    )
}

export default Title;
=======
  return (
    <div className="logo_name">
      <img src={logo} className="logo-reg" alt="logo" />
      {/* <img src={budgetImg} className="name-reg" alt="budget_blocks" /> */}
      <Typography variant="h2" className="sign">
        {title}
      </Typography>
    </div>
  );
};

export default Title;
>>>>>>> cf24e3b4c0b687d23bb5d29ee5e77e91084dc542
