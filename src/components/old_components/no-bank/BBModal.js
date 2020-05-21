import React, { useState } from 'react'
import { Modal, Button, TextField } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 45;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const style = getModalStyle()

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));


function ExpenseFormModal(props) {
  return (

    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={style} className={useStyles().paper}>
        {props.children}
       
      </div>
    </Modal>

  )
}

export default ExpenseFormModal
