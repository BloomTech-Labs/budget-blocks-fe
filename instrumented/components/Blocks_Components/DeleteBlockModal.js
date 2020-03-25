var cov_103ik8ce40 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Blocks_Components/DeleteBlockModal.js";
  var hash = "e69e12a02b9c91e5ccf58a06566ef6e787a1ed59";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Blocks_Components/DeleteBlockModal.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 25
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 19,
          column: 46
        }
      },
      "2": {
        start: {
          line: 21,
          column: 25
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "3": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 16
        }
      },
      "4": {
        start: {
          line: 25,
          column: 21
        },
        end: {
          line: 27,
          column: 2
        }
      },
      "5": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 17
        }
      },
      "6": {
        start: {
          line: 29,
          column: 1
        },
        end: {
          line: 62,
          column: 3
        }
      },
      "7": {
        start: {
          line: 53,
          column: 21
        },
        end: {
          line: 53,
          column: 50
        }
      },
      "8": {
        start: {
          line: 66,
          column: 1
        },
        end: {
          line: 70,
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
            column: 64
          },
          end: {
            line: 63,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 25
          },
          end: {
            line: 21,
            column: 26
          }
        },
        loc: {
          start: {
            line: 21,
            column: 31
          },
          end: {
            line: 23,
            column: 2
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 25,
            column: 22
          }
        },
        loc: {
          start: {
            line: 25,
            column: 27
          },
          end: {
            line: 27,
            column: 2
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 53,
            column: 15
          },
          end: {
            line: 53,
            column: 16
          }
        },
        loc: {
          start: {
            line: 53,
            column: 21
          },
          end: {
            line: 53,
            column: 50
          }
        },
        line: 53
      },
      "4": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 65,
            column: 9
          },
          end: {
            line: 65,
            column: 24
          }
        },
        loc: {
          start: {
            line: 65,
            column: 32
          },
          end: {
            line: 71,
            column: 1
          }
        },
        line: 65
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
    hash: "e69e12a02b9c91e5ccf58a06566ef6e787a1ed59"
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
import { deleteBlocks } from "../../redux/actions/userBlocks";
cov_103ik8ce40.s[0]++;

const DeleteTransModal = ({
  deleteBlocks,
  userID,
  blockID
}) => {
  cov_103ik8ce40.f[0]++;
  // This component displays the delete button for each block the user has. The button is the trash can icon from material-ui.
  // Clicking the button will open a modal (dialog) asking if they want to delete the block
  // Clicking delete will call the action from userBlocks in redux to delete the block from their account
  // Delete only works for NON-PRESET categories
  const [open, setOpen] = (cov_103ik8ce40.s[1]++, React.useState(false));
  cov_103ik8ce40.s[2]++;

  const handleClickOpen = () => {
    cov_103ik8ce40.f[1]++;
    cov_103ik8ce40.s[3]++;
    setOpen(true);
  };

  cov_103ik8ce40.s[4]++;

  const handleClose = () => {
    cov_103ik8ce40.f[2]++;
    cov_103ik8ce40.s[5]++;
    setOpen(false);
  };

  cov_103ik8ce40.s[6]++;
  return <div>
			<IconButton aria-label='delete' onClick={handleClickOpen} title='delete'>
				<DeleteIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>
					{'Delete Block?'}
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
          cov_103ik8ce40.f[3]++;
          cov_103ik8ce40.s[7]++;
          return deleteBlocks(userID, blockID);
        }} color='primary' autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>;
};

function mapStateToProps(state) {
  cov_103ik8ce40.f[4]++;
  cov_103ik8ce40.s[8]++;
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    transactions: state.plaidReducer.transactions
  };
}

export default connect(mapStateToProps, {
  deleteBlocks
})(DeleteTransModal);