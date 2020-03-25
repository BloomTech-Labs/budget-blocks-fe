var cov_2lbn7a5iss = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/TotalExpenses.js";
  var hash = "f8c0481453b38039d113d1dc8c744bd16a91cb6c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/TotalExpenses.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 16,
          column: 6
        }
      },
      "2": {
        start: {
          line: 10,
          column: 5
        },
        end: {
          line: 10,
          column: 18
        }
      },
      "3": {
        start: {
          line: 18,
          column: 1
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "4": {
        start: {
          line: 26,
          column: 1
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "5": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 4,
            column: 23
          }
        },
        loc: {
          start: {
            line: 4,
            column: 31
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 26
          },
          end: {
            line: 9,
            column: 27
          }
        },
        loc: {
          start: {
            line: 9,
            column: 41
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
      },
      "2": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 25,
            column: 9
          },
          end: {
            line: 25,
            column: 24
          }
        },
        loc: {
          start: {
            line: 25,
            column: 32
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 3
          },
          end: {
            line: 28,
            column: 4
          }
        },
        loc: {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 39
          }
        },
        line: 28
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f8c0481453b38039d113d1dc8c744bd16a91cb6c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { connect } from 'react-redux';
cov_2lbn7a5iss.s[0]++;

const TotalExpenses = props => {
  cov_2lbn7a5iss.f[0]++;
  const TotalExpenses = (cov_2lbn7a5iss.s[1]++, (Math.round(100 * props.expenses.reduce(function (a, b) {
    cov_2lbn7a5iss.f[1]++;
    cov_2lbn7a5iss.s[2]++;
    return a + b;
  }, 0)) / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  }));
  cov_2lbn7a5iss.s[3]++;
  return <div className='budget-expenses'>
            <h4>Total Expenses</h4>
            <p>{TotalExpenses}</p>
        </div>;
};

function mapStateToProps(state) {
  cov_2lbn7a5iss.f[2]++;
  cov_2lbn7a5iss.s[4]++;
  return {
    expenses: state.plaidReducer.categories.map(i => {
      cov_2lbn7a5iss.f[3]++;
      cov_2lbn7a5iss.s[5]++;
      return Math.round(100 * i.total) / 100;
    })
  };
}

export default connect(mapStateToProps)(TotalExpenses);