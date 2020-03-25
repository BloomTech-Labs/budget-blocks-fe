var cov_2cx801dc90 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/Back_Continue.js";
  var hash = "6f42925a16940ab0d3a4f288e3e7f6fb37714a95";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/Back_Continue.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 29
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 26
        },
        end: {
          line: 15,
          column: 27
        }
      },
      "2": {
        start: {
          line: 10,
          column: 47
        },
        end: {
          line: 15,
          column: 7
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 37,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 29
          },
          end: {
            line: 6,
            column: 30
          }
        },
        loc: {
          start: {
            line: 6,
            column: 56
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 37
          },
          end: {
            line: 10,
            column: 38
          }
        },
        loc: {
          start: {
            line: 10,
            column: 47
          },
          end: {
            line: 15,
            column: 7
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6f42925a16940ab0d3a4f288e3e7f6fb37714a95"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
cov_2cx801dc90.s[0]++;
export const Back_Continue = ({
  BackClick,
  ContClick
}) => {
  cov_2cx801dc90.f[0]++;
  // This component makes a Back and Continue button: mostly used for modals
  // BackClick and ContClick are functions for onClick for both buttons
  const DialogActions = (cov_2cx801dc90.s[1]++, withStyles(theme => {
    cov_2cx801dc90.f[1]++;
    cov_2cx801dc90.s[2]++;
    return {
      root: {
        margin: 0,
        padding: theme.spacing(1)
      }
    };
  })(MuiDialogActions));
  cov_2cx801dc90.s[3]++;
  return <DialogActions className="buttons">
          <Button className="backBtn" onClick={BackClick} variant="outlined" color="primary">
            BACK
          </Button>
          
          <Button className="contBtn" onClick={ContClick} variant="outlined" color="primary">
            CONTINUE
          </Button>
        </DialogActions>;
};