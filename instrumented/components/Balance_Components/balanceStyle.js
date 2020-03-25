var cov_p9r0s6v28 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Balance_Components/balanceStyle.js";
  var hash = "2db0fad8ec8a216ba4ff901a686a21804f8a1777";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Balance_Components/balanceStyle.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 14,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2db0fad8ec8a216ba4ff901a686a21804f8a1777"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import { makeStyles } from '@material-ui/core/styles';
export const useStyles = (cov_p9r0s6v28.s[0]++, makeStyles({
  NoBalance: {
    minWidth: 275,
    background: '#F0F0F0',
    display: "flex",
    padding: "2rem",
    marginBottom: "2rem",
    marginTop: "2rem",
    alignItems: "center",
    justifyContent: "space-around"
  }
}));