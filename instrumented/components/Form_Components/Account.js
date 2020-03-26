var cov_wx3giz5kz = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/Account.js";
  var hash = "58d70e346efcf4e6ec4258577da0a3cf438405e0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/Account.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
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
            column: 15
          },
          end: {
            line: 5,
            column: 16
          }
        },
        loc: {
          start: {
            line: 5,
            column: 37
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
    hash: "58d70e346efcf4e6ec4258577da0a3cf438405e0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
cov_wx3giz5kz.s[0]++;

const Account = ({
  message,
  link
}) => {
  cov_wx3giz5kz.f[0]++;
  cov_wx3giz5kz.s[1]++;
  // This components returns a message and link to wherever need be (this component is used in Login and Register at the moment)
  // message and link are both strings
  return <div className="account">
            <Typography className="account">{message}</Typography>
            <Link to={link} className="links">Click <strong> here!</strong></Link>
        </div>;
};

export default Account;