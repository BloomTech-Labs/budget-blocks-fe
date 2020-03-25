var cov_20djrfcpcf = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Transactions_Components/DeleteTranModal.js";
  var hash = "bf94b578b9bcfd908979b90a4fef31f9e2333417";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Transactions_Components/DeleteTranModal.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 25
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 17,
          column: 46
        }
      },
      "2": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 21,
          column: 2
        }
      },
      "3": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 16
        }
      },
      "4": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 25,
          column: 2
        }
      },
      "5": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 17
        }
      },
      "6": {
        start: {
          line: 27,
          column: 1
        },
        end: {
          line: 60,
          column: 3
        }
      },
      "7": {
        start: {
          line: 51,
          column: 21
        },
        end: {
          line: 51,
          column: 49
        }
      },
      "8": {
        start: {
          line: 64,
          column: 1
        },
        end: {
          line: 68,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 25
          },
          end: {
            line: 13,
            column: 26
          }
        },
        loc: {
          start: {
            line: 13,
            column: 70
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 25
          },
          end: {
            line: 19,
            column: 26
          }
        },
        loc: {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 21,
            column: 2
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 21
          },
          end: {
            line: 23,
            column: 22
          }
        },
        loc: {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 25,
            column: 2
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 51,
            column: 16
          }
        },
        loc: {
          start: {
            line: 51,
            column: 21
          },
          end: {
            line: 51,
            column: 49
          }
        },
        line: 51
      },
      "4": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 63,
            column: 9
          },
          end: {
            line: 63,
            column: 24
          }
        },
        loc: {
          start: {
            line: 63,
            column: 32
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 63
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bf94b578b9bcfd908979b90a4fef31f9e2333417"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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
cov_20djrfcpcf.s[0]++;

const DeleteTransModal = ({
  props,
  deleteTrans,
  userID,
  transID
}) => {
  cov_20djrfcpcf.f[0]++;
  // This component displays the delete button for each transaction the user has. The button is the trash can icon from material-ui.
  // Clicking the button will open a modal (dialog) asking if they want to delete the transaction
  // Clicking delete will call the action from AddTransactionActions in redux to delete the transaction from their account
  const [open, setOpen] = (cov_20djrfcpcf.s[1]++, React.useState(false));
  cov_20djrfcpcf.s[2]++;

  const handleClickOpen = () => {
    cov_20djrfcpcf.f[1]++;
    cov_20djrfcpcf.s[3]++;
    setOpen(true);
  };

  cov_20djrfcpcf.s[4]++;

  const handleClose = () => {
    cov_20djrfcpcf.f[2]++;
    cov_20djrfcpcf.s[5]++;
    setOpen(false);
  };

  cov_20djrfcpcf.s[6]++;
  return <div>
			<IconButton aria-label='delete' onClick={handleClickOpen} title='delete'>
				<DeleteIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
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
					<Button onClick={() => {
          cov_20djrfcpcf.f[3]++;
          cov_20djrfcpcf.s[7]++;
          return deleteTrans(userID, transID);
        }} color='primary' autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>;
};

function mapStateToProps(state) {
  cov_20djrfcpcf.f[4]++;
  cov_20djrfcpcf.s[8]++;
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    transactions: state.plaidReducer.transactions
  };
}

export default connect(mapStateToProps, {
  deleteTrans
})(DeleteTransModal);