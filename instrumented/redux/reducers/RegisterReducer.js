var cov_21k81q9a0q = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/reducers/RegisterReducer.js";
  var hash = "eb66d455548d10f6280906e4a2d67dbf51db56c5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/reducers/RegisterReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 23
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "2": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 14,
          column: 14
        }
      },
      "3": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 20,
          column: 13
        }
      },
      "4": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 26,
          column: 13
        }
      },
      "5": {
        start: {
          line: 28,
          column: 12
        },
        end: {
          line: 28,
          column: 25
        }
      },
      "6": {
        start: {
          line: 32,
          column: 21
        },
        end: {
          line: 35,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 23
          },
          end: {
            line: 7,
            column: 24
          }
        },
        loc: {
          start: {
            line: 7,
            column: 57
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 7,
            column: 32
          },
          end: {
            line: 7,
            column: 44
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 9,
            column: 8
          },
          end: {
            line: 14,
            column: 14
          }
        }, {
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 20,
            column: 13
          }
        }, {
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 26,
            column: 13
          }
        }, {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 28,
            column: 25
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "eb66d455548d10f6280906e4a2d67dbf51db56c5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import { REGISTER_USER_LOADING, REGISTER_USER_FAILED, REGISTER_USER_SUCCESS } from "../actions/RegisterActions";
cov_21k81q9a0q.s[0]++;
export const reducer = (state = (cov_21k81q9a0q.b[0][0]++, initialState), action) => {
  cov_21k81q9a0q.f[0]++;
  cov_21k81q9a0q.s[1]++;

  switch (action.type) {
    case REGISTER_USER_LOADING:
      cov_21k81q9a0q.b[1][0]++;
      cov_21k81q9a0q.s[2]++;
      return { ...state,
        isFetching: true,
        error: null
      };

    case REGISTER_USER_FAILED:
      cov_21k81q9a0q.b[1][1]++;
      cov_21k81q9a0q.s[3]++;
      return { ...state,
        isFetching: false,
        error: action.payload
      };

    case REGISTER_USER_SUCCESS:
      cov_21k81q9a0q.b[1][2]++;
      cov_21k81q9a0q.s[4]++;
      return { ...state,
        isFetching: false,
        error: null
      };

    default:
      cov_21k81q9a0q.b[1][3]++;
      cov_21k81q9a0q.s[5]++;
      return state;
  }
};
const initialState = (cov_21k81q9a0q.s[6]++, {
  error: null,
  isFetching: false
});