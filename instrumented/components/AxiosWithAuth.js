var cov_9uo7lr4h4 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/AxiosWithAuth.js";
  var hash = "987f9131efb91489cb0a0952d0cc0bfe981ee707";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/AxiosWithAuth.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 29
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 10,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 3,
            column: 34
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
    hash: "987f9131efb91489cb0a0952d0cc0bfe981ee707"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import axios from "axios";
cov_9uo7lr4h4.s[0]++;
export const axiosWithAuth = () => {
  cov_9uo7lr4h4.f[0]++;
  cov_9uo7lr4h4.s[1]++;
  return axios.create({
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
      [`Access-Control-Allow-Origin`]: '*',
      [`Access-Control-Allow-Methods`]: 'GET,PUSH,POST,PATCH,DELETE,OPTIONS,PUT'
    }
  });
};