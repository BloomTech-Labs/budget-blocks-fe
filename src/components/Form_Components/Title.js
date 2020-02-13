import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../../media/image/logo.jpg";
import budgetImg from "../../media/image/budget_blocks.png";

const Title = ({ title }) => {

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