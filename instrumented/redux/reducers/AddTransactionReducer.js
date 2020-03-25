var cov_150ioc6jv9 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/reducers/AddTransactionReducer.js";
  var hash = "862b0b829c07faefe756d873dbe2307e62b5eda6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/reducers/AddTransactionReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 23
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 1
        },
        end: {
          line: 76,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 3
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "3": {
        start: {
          line: 22,
          column: 3
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "4": {
        start: {
          line: 28,
          column: 3
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "5": {
        start: {
          line: 35,
          column: 3
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "6": {
        start: {
          line: 41,
          column: 3
        },
        end: {
          line: 45,
          column: 5
        }
      },
      "7": {
        start: {
          line: 47,
          column: 3
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "8": {
        start: {
          line: 55,
          column: 3
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "9": {
        start: {
          line: 62,
          column: 3
        },
        end: {
          line: 67,
          column: 5
        }
      },
      "10": {
        start: {
          line: 69,
          column: 3
        },
        end: {
          line: 73,
          column: 5
        }
      },
      "11": {
        start: {
          line: 75,
          column: 3
        },
        end: {
          line: 75,
          column: 16
        }
      },
      "12": {
        start: {
          line: 79,
          column: 21
        },
        end: {
          line: 84,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 23
          },
          end: {
            line: 13,
            column: 24
          }
        },
        loc: {
          start: {
            line: 13,
            column: 57
          },
          end: {
            line: 77,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 13,
            column: 32
          },
          end: {
            line: 13,
            column: 44
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 1
          },
          end: {
            line: 76,
            column: 2
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 26,
            column: 5
          }
        }, {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 33,
            column: 5
          }
        }, {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 39,
            column: 5
          }
        }, {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 45,
            column: 5
          }
        }, {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 52,
            column: 5
          }
        }, {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 60,
            column: 5
          }
        }, {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 67,
            column: 5
          }
        }, {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 73,
            column: 5
          }
        }, {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 75,
            column: 16
          }
        }],
        line: 14
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
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "862b0b829c07faefe756d873dbe2307e62b5eda6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import { ADD_TRANSACTION_LOADING, ADD_TRANSACTION_FAILED, ADD_TRANSACTION_SUCCESS, CATEGORIES_LOADING, CATEGORIES_SUCCESS, CATEGORIES_FAILED, DELETE_TRANS_FAIL, DELETE_TRANS_LOADING, DELETE_TRANS_SUCCESS } from '../actions/AddTransactionActions';
cov_150ioc6jv9.s[0]++;
export const reducer = (state = (cov_150ioc6jv9.b[0][0]++, initialState), action) => {
  cov_150ioc6jv9.f[0]++;
  cov_150ioc6jv9.s[1]++;

  switch (action.type) {
    case ADD_TRANSACTION_LOADING:
      cov_150ioc6jv9.b[1][0]++;
      cov_150ioc6jv9.s[2]++;
      return { ...state,
        isFetching: true,
        error: null
      };

    case ADD_TRANSACTION_FAILED:
      cov_150ioc6jv9.b[1][1]++;
      cov_150ioc6jv9.s[3]++;
      return { ...state,
        isFetching: false,
        error: action.payload
      };

    case ADD_TRANSACTION_SUCCESS:
      cov_150ioc6jv9.b[1][2]++;
      cov_150ioc6jv9.s[4]++;
      return { ...state,
        transaction: action.payload,
        isFetching: false,
        error: null
      };

    case CATEGORIES_LOADING:
      cov_150ioc6jv9.b[1][3]++;
      cov_150ioc6jv9.s[5]++;
      return { ...state,
        isFetching: true,
        error: null
      };

    case CATEGORIES_FAILED:
      cov_150ioc6jv9.b[1][4]++;
      cov_150ioc6jv9.s[6]++;
      return { ...state,
        isFetching: false,
        error: action.payload
      };

    case CATEGORIES_SUCCESS:
      cov_150ioc6jv9.b[1][5]++;
      cov_150ioc6jv9.s[7]++;
      return { ...state,
        categories: action.payload,
        isFetching: false,
        error: null
      };
    //delete trans

    case DELETE_TRANS_LOADING:
      cov_150ioc6jv9.b[1][6]++;
      cov_150ioc6jv9.s[8]++;
      return { ...state,
        isFetching: true,
        error: ''
      };

    case DELETE_TRANS_SUCCESS:
      cov_150ioc6jv9.b[1][7]++;
      cov_150ioc6jv9.s[9]++;
      return { ...state,
        transaction: action.payload,
        isFetching: false,
        error: ''
      };

    case DELETE_TRANS_FAIL:
      cov_150ioc6jv9.b[1][8]++;
      cov_150ioc6jv9.s[10]++;
      return { ...state,
        isFetching: false,
        error: `${action.payload.status}`
      };

    default:
      cov_150ioc6jv9.b[1][9]++;
      cov_150ioc6jv9.s[11]++;
      return state;
  }
};
const initialState = (cov_150ioc6jv9.s[12]++, {
  categories: '',
  transaction: '',
  error: null,
  isFetching: false
});