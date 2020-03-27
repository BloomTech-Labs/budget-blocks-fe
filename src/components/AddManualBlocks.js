import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { axiosWithAuth } from "./AxiosWithAuth";
import DemomanualBlocks from "./Modal_Components/demomanualBlocks";
import environmentUrls from "../../dispatch";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",

    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function AddManualBlocks(props) {
  // This component displays the modal to create a new block
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`${environmentUrls.base_url}/api/users/categories/${props.userID}`)
      .then(i => setBlocks(i.data));
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="blocks-button">
        Add Manual Blocks
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <DemomanualBlocks
            open={true}
            handleClose={handleClose}
            blocks={blocks}
            history={props.history}
          />
        </div>
      </Modal>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    blocks: state.plaidReducer.categories,
    categories: state.plaidReducer.categories
  };
}

export default connect(mapStateToProps, { AddManualBlocks })(AddManualBlocks);
