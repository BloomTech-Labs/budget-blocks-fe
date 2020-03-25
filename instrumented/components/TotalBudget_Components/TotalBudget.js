var cov_1ul3jemsz0 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/TotalBudget.js";
  var hash = "922422b7122a2a442d32ed9996f0f951ab120424";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/TotalBudget.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 17,
          column: 9
        }
      },
      "2": {
        start: {
          line: 15,
          column: 5
        },
        end: {
          line: 15,
          column: 18
        }
      },
      "3": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 25,
          column: 9
        }
      },
      "4": {
        start: {
          line: 23,
          column: 5
        },
        end: {
          line: 23,
          column: 18
        }
      },
      "5": {
        start: {
          line: 26,
          column: 17
        },
        end: {
          line: 26,
          column: 61
        }
      },
      "6": {
        start: {
          line: 27,
          column: 1
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "7": {
        start: {
          line: 42,
          column: 1
        },
        end: {
          line: 49,
          column: 3
        }
      },
      "8": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 40
        }
      },
      "9": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 10,
            column: 21
          }
        },
        loc: {
          start: {
            line: 10,
            column: 29
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 24
          },
          end: {
            line: 14,
            column: 25
          }
        },
        loc: {
          start: {
            line: 14,
            column: 39
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 26
          },
          end: {
            line: 22,
            column: 27
          }
        },
        loc: {
          start: {
            line: 22,
            column: 41
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 22
      },
      "3": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 41,
            column: 9
          },
          end: {
            line: 41,
            column: 24
          }
        },
        loc: {
          start: {
            line: 41,
            column: 32
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 41
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 44,
            column: 3
          },
          end: {
            line: 44,
            column: 4
          }
        },
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 40
          }
        },
        line: 44
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 47,
            column: 3
          },
          end: {
            line: 47,
            column: 4
          }
        },
        loc: {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 47,
            column: 39
          }
        },
        line: 47
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 35,
            column: 23
          },
          end: {
            line: 35,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 35,
            column: 39
          },
          end: {
            line: 35,
            column: 42
          }
        }, {
          start: {
            line: 35,
            column: 45
          },
          end: {
            line: 35,
            column: 52
          }
        }],
        line: 35
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "922422b7122a2a442d32ed9996f0f951ab120424"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import BudgetGoal from './BudgetGoal';
import TotalExpenses from './TotalExpenses';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';
import './index.css';
cov_1ul3jemsz0.s[0]++;

const TotalBudget = props => {
  cov_1ul3jemsz0.f[0]++;
  const sumBudget = (cov_1ul3jemsz0.s[1]++, Math.round(100 * props.budget.reduce(function (a, b) {
    cov_1ul3jemsz0.f[1]++;
    cov_1ul3jemsz0.s[2]++;
    return a + b;
  }, 0)) / 100);
  const sumExpenses = (cov_1ul3jemsz0.s[3]++, Math.round(100 * props.expenses.reduce(function (a, b) {
    cov_1ul3jemsz0.f[2]++;
    cov_1ul3jemsz0.s[4]++;
    return a + b;
  }, 0)) / 100);
  const percent = (cov_1ul3jemsz0.s[5]++, (sumExpenses / sumBudget * 100).toFixed(2));
  cov_1ul3jemsz0.s[6]++;
  return <div className='budget-container'>
			<h5>Budget Summary</h5>
			<div className='budget-showcase'>
				<TotalExpenses />
				<BudgetGoal />
			</div>
			<div className='bar-showcase'>
				<ProgressBar done={percent > 100 ? (cov_1ul3jemsz0.b[0][0]++, 100) : (cov_1ul3jemsz0.b[0][1]++, percent)}></ProgressBar>
			</div>
		</div>;
};

function mapStateToProps(state) {
  cov_1ul3jemsz0.f[3]++;
  cov_1ul3jemsz0.s[7]++;
  return {
    budget: state.plaidReducer.categories.map(i => {
      cov_1ul3jemsz0.f[4]++;
      cov_1ul3jemsz0.s[8]++;
      return Math.round(100 * i.budget) / 100;
    }),
    expenses: state.plaidReducer.categories.map(i => {
      cov_1ul3jemsz0.f[5]++;
      cov_1ul3jemsz0.s[9]++;
      return Math.round(100 * i.total) / 100;
    })
  };
}

export default connect(mapStateToProps)(TotalBudget);