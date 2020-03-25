var cov_283e5nj3wb = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/reducers/BlockReducers.js";
  var hash = "b3e90f8b54dc5bd7fada605168c56a1c3b3b75fa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/reducers/BlockReducers.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 28
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "1": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "3": {
        start: {
          line: 24,
          column: 12
        },
        end: {
          line: 28,
          column: 14
        }
      },
      "4": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 34,
          column: 13
        }
      },
      "5": {
        start: {
          line: 36,
          column: 12
        },
        end: {
          line: 41,
          column: 13
        }
      },
      "6": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 45,
          column: 13
        }
      },
      "7": {
        start: {
          line: 47,
          column: 12
        },
        end: {
          line: 51,
          column: 14
        }
      },
      "8": {
        start: {
          line: 53,
          column: 12
        },
        end: {
          line: 57,
          column: 13
        }
      },
      "9": {
        start: {
          line: 59,
          column: 12
        },
        end: {
          line: 63,
          column: 13
        }
      },
      "10": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 65,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 23
          },
          end: {
            line: 20,
            column: 24
          }
        },
        loc: {
          start: {
            line: 20,
            column: 55
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 20,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 20,
            column: 42
          }
        }],
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 28,
            column: 14
          }
        }, {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 34,
            column: 13
          }
        }, {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 41,
            column: 13
          }
        }, {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 45,
            column: 13
          }
        }, {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 51,
            column: 14
          }
        }, {
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 57,
            column: 13
          }
        }, {
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 63,
            column: 13
          }
        }, {
          start: {
            line: 64,
            column: 8
          },
          end: {
            line: 65,
            column: 25
          }
        }],
        line: 22
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
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b3e90f8b54dc5bd7fada605168c56a1c3b3b75fa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import { BLOCKS_CATEGORY_LOADING, BLOCKS_CATEGORY_FAILED, BLOCKS_CATEGORY_SUCCESS, CATEGORY_UPDATE_LOADING, CATEGORY_UPDATE_SUCCESS, CATEGORY_UPDATE_FAILED } from "../actions/userBlocks";
import { CLEAR_BLOCKS } from "../actions/LogoutAction";
export const initialState = (cov_283e5nj3wb.s[0]++, {
  blocks: [],
  error: null,
  isFetching: false
});
cov_283e5nj3wb.s[1]++;
export const reducer = (state = (cov_283e5nj3wb.b[0][0]++, initialState), action) => {
  cov_283e5nj3wb.f[0]++;
  cov_283e5nj3wb.s[2]++;

  switch (action.type) {
    case BLOCKS_CATEGORY_LOADING:
      cov_283e5nj3wb.b[1][0]++;
      cov_283e5nj3wb.s[3]++;
      return { ...state,
        isFetching: true,
        error: null
      };

    case BLOCKS_CATEGORY_FAILED:
      cov_283e5nj3wb.b[1][1]++;
      cov_283e5nj3wb.s[4]++;
      return { ...state,
        isFetching: false,
        error: action.payload
      };

    case BLOCKS_CATEGORY_SUCCESS:
      cov_283e5nj3wb.b[1][2]++;
      cov_283e5nj3wb.s[5]++;
      return { ...state,
        isFetching: false,
        blocks: action.payload,
        error: null
      };

    case CLEAR_BLOCKS:
      cov_283e5nj3wb.b[1][3]++;
      cov_283e5nj3wb.s[6]++;
      return { ...initialState
      };

    case CATEGORY_UPDATE_LOADING:
      cov_283e5nj3wb.b[1][4]++;
      cov_283e5nj3wb.s[7]++;
      return { ...state,
        isFetching: true,
        error: null
      };

    case CATEGORY_UPDATE_SUCCESS:
      cov_283e5nj3wb.b[1][5]++;
      cov_283e5nj3wb.s[8]++;
      return { ...state,
        isFetching: false,
        error: action.payload
      };

    case CATEGORY_UPDATE_FAILED:
      cov_283e5nj3wb.b[1][6]++;
      cov_283e5nj3wb.s[9]++;
      return { ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      cov_283e5nj3wb.b[1][7]++;
      cov_283e5nj3wb.s[10]++;
      return state;
  }
};