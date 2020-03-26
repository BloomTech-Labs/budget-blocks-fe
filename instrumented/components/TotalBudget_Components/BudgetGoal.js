var cov_29xy0repcp = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/BudgetGoal.js";
  var hash = "a56aecf3a03176006e1027e6ea03451a3affcbcb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/BudgetGoal.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 16,
          column: 3
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
          line: 17,
          column: 1
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "4": {
        start: {
          line: 25,
          column: 1
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "5": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 4,
            column: 20
          }
        },
        loc: {
          start: {
            line: 4,
            column: 28
          },
          end: {
            line: 23,
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
            column: 24
          },
          end: {
            line: 9,
            column: 25
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
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
            line: 24,
            column: 9
          },
          end: {
            line: 24,
            column: 24
          }
        },
        loc: {
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 24
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 3
          },
          end: {
            line: 27,
            column: 4
          }
        },
        loc: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 40
          }
        },
        line: 27
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
    hash: "a56aecf3a03176006e1027e6ea03451a3affcbcb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { connect } from 'react-redux';
cov_29xy0repcp.s[0]++;

const BudgetGoal = props => {
  cov_29xy0repcp.f[0]++;
  // This component takes all the categories' budgets and total them to be displayed.
  const BudgetGoal = (cov_29xy0repcp.s[1]++, (Math.round(100 * props.budget.reduce(function (a, b) {
    cov_29xy0repcp.f[1]++;
    cov_29xy0repcp.s[2]++;
    return a + b;
  }, 0)) / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  }));
  cov_29xy0repcp.s[3]++;
  return <div className='budget-goal'>
			<h4>Budget Goal</h4>
			<p>{BudgetGoal}</p>
		</div>;
};

function mapStateToProps(state) {
  cov_29xy0repcp.f[2]++;
  cov_29xy0repcp.s[4]++;
  return {
    budget: state.plaidReducer.categories.map(i => {
      cov_29xy0repcp.f[3]++;
      cov_29xy0repcp.s[5]++;
      return Math.round(100 * i.budget) / 100;
    })
  };
}

export default connect(mapStateToProps)(BudgetGoal);