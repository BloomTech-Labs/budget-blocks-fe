var cov_2kl7bnot2e = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/DialogTitle.js";
  var hash = "2c881f27c5828d904aa892bb796878d902fdb23f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/DialogTitle.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "1": {
        start: {
          line: 11,
          column: 53
        },
        end: {
          line: 11,
          column: 58
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 25,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 46
          },
          end: {
            line: 10,
            column: 47
          }
        },
        loc: {
          start: {
            line: 10,
            column: 55
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 23,
            column: 16
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 10
          },
          end: {
            line: 22,
            column: 23
          }
        }, {
          start: {
            line: 23,
            column: 12
          },
          end: {
            line: 23,
            column: 16
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2c881f27c5828d904aa892bb796878d902fdb23f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import { styles } from "./styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
export const DialogTitle = (cov_2kl7bnot2e.s[0]++, withStyles(styles)(props => {
  cov_2kl7bnot2e.f[0]++;
  const {
    children,
    classes,
    onClose,
    ...other
  } = (cov_2kl7bnot2e.s[1]++, props);
  cov_2kl7bnot2e.s[2]++;
  return <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (cov_2kl7bnot2e.b[0][0]++, <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>) : (cov_2kl7bnot2e.b[0][1]++, null)}
      </MuiDialogTitle>;
}));
export default DialogTitle;