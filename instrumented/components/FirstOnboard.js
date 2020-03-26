var cov_2pvlca8v0f = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/FirstOnboard.js";
  var hash = "89bdfd12cd9928d1d74d625b5a95246e374b285f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/FirstOnboard.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 10,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 21
          },
          end: {
            line: 3,
            column: 22
          }
        },
        loc: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
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
    hash: "89bdfd12cd9928d1d74d625b5a95246e374b285f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { useEffect, useState } from "react";
import Balance from "./Balance_Components/Balance";
cov_2pvlca8v0f.s[0]++;

const FirstOnboard = props => {
  cov_2pvlca8v0f.f[0]++;
  cov_2pvlca8v0f.s[1]++;
  return <div className="">
        Manually set budgets
        <Balance /> 
        </div>;
};

export default FirstOnboard;