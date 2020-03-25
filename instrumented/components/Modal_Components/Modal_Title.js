var cov_1xhaq2i9sy = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/Modal_Title.js";
  var hash = "7bd3a1ae810686c442cc9f7c0a4788aba476bbde";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/Modal_Title.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 27
          },
          end: {
            line: 5,
            column: 28
          }
        },
        loc: {
          start: {
            line: 5,
            column: 53
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "7bd3a1ae810686c442cc9f7c0a4788aba476bbde"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "./DialogTitle";
cov_1xhaq2i9sy.s[0]++;
export const Modal_Title = ({
  handleClose,
  title
}) => {
  cov_1xhaq2i9sy.f[0]++;
  cov_1xhaq2i9sy.s[1]++;
  // This component creates the title for modals
  return <DialogTitle className="customized-dialog-title" onClose={handleClose}>
          <Typography className="customized-dialog-title">
            {title}
          </Typography>
        </DialogTitle>;
};