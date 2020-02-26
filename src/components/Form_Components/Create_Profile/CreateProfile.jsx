import React, { useState } from "react";
import { connect } from "react-redux";
import { createProfile } from "../../../redux/actions/ProfileActions";
import Title from "../Title";
import PasswordField from "../PasswordField";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./createProfileStyle.css";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const Profile = props => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div onSubmit={handleSubmit}>
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff" }}>
          
          <Title title="Create Profile"/>

          <form className="ProfileForm">
            <FormControl variant="outlined">
              <Typography className="label">First Name</Typography>
              <TextField
                placeholder="First Name"
                variant="outlined"
                type="text"
                name="fName"
                onChange={handleChange}
                value={user.fName}
              />
              <div className="labels">
                <Typography className="label">Last Name</Typography>
              </div>

              <TextField
                placeholder="Last name"
                type="text"
                onChange={handleChange}
                value={user.lName}
                name="lName"
                variant="outlined"
              />
              <div className="labels">
                <Typography className="label">Email Address</Typography>
              </div>
              <TextField
                id="outlined-basic"
                placeholder="example@email.com"
                variant="outlined"
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
              />
              <div className="labels">
                <Typography className="label">Password</Typography>
              </div>


              <PasswordField 
                name="password" 
                placeholder="Password" 
                label="Password" 
                error={false}
                value={user.password}
                handleChange={handleChange}
                />

              <Button variant="outlined" className="continueBtn" type="submit">
                Continue
              </Button>
              <Button variant="outlined" className="skipBtn" type="submit">
                Skip (You can edit this later)
              </Button>
            </FormControl>
          </form>
        </div>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { createProfile })(Profile);
