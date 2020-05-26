import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteTrans } from '../../redux/actions/AddTransactionActions';

const DeleteTransModal = ({ props, deleteTrans, userID, transID }) => {
	// This component displays the delete button for each transaction the user has. The button is the trash can icon from material-ui.
	// Clicking the button will open a modal (dialog) asking if they want to delete the transaction
	// Clicking delete will call the action from AddTransactionActions in redux to delete the transaction from their account
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton aria-label='delete' onClick={handleClickOpen} title='delete'>
				<DeleteIcon />
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{'Delete transaction?'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure want to delete it?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button
						onClick={() => deleteTrans(userID, transID)}
						color='primary'
						autoFocus
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		transactions: state.plaidReducer.transactions
	};
}

export default connect(mapStateToProps, { deleteTrans })(DeleteTransModal);
