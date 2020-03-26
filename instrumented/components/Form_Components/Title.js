var cov_194bzcnkqq = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/Title.js";
  var hash = "27f38d45e043838bbd62bd5e9057d287572cd417";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/Title.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 16,
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
            column: 14
          },
          end: {
            line: 6,
            column: 15
          }
        },
        loc: {
          start: {
            line: 6,
            column: 29
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 6
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
    hash: "27f38d45e043838bbd62bd5e9057d287572cd417"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../../media/image/logo.jpg";
import budgetImg from "../../media/image/budget_blocks.png";
cov_194bzcnkqq.s[0]++;

const Title = ({
  title
}) => {
  cov_194bzcnkqq.f[0]++;
  cov_194bzcnkqq.s[1]++;
  // This component displays the Logo and the title of the component (used in login and register)
  return <div className="logo_name">
            <img src={logo} className="logo-reg" alt="logo" />
            <img src={budgetImg} className="name-reg" alt="budget_blocks" />
            <Typography variant="h2" className="sign">
              {title}
            </Typography>
        </div>;
};

export default Title;