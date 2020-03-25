var cov_13t8ikjm5k = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/actions/LogoutAction.js";
  var hash = "3b24710385532734173eaddc5cc80f7d7d0ec1fa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/redux/actions/LogoutAction.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 27
        },
        end: {
          line: 1,
          column: 40
        }
      },
      "1": {
        start: {
          line: 2,
          column: 27
        },
        end: {
          line: 2,
          column: 40
        }
      },
      "2": {
        start: {
          line: 3,
          column: 28
        },
        end: {
          line: 3,
          column: 42
        }
      },
      "3": {
        start: {
          line: 5,
          column: 32
        },
        end: {
          line: 5,
          column: 61
        }
      },
      "4": {
        start: {
          line: 5,
          column: 39
        },
        end: {
          line: 5,
          column: 60
        }
      },
      "5": {
        start: {
          line: 7,
          column: 32
        },
        end: {
          line: 7,
          column: 61
        }
      },
      "6": {
        start: {
          line: 7,
          column: 39
        },
        end: {
          line: 7,
          column: 60
        }
      },
      "7": {
        start: {
          line: 9,
          column: 33
        },
        end: {
          line: 9,
          column: 63
        }
      },
      "8": {
        start: {
          line: 9,
          column: 40
        },
        end: {
          line: 9,
          column: 62
        }
      },
      "9": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "10": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 31
        }
      },
      "11": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 28
        }
      },
      "12": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 37
        }
      },
      "13": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 37
        }
      },
      "14": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 32
          },
          end: {
            line: 5,
            column: 33
          }
        },
        loc: {
          start: {
            line: 5,
            column: 39
          },
          end: {
            line: 5,
            column: 60
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 32
          },
          end: {
            line: 7,
            column: 33
          }
        },
        loc: {
          start: {
            line: 7,
            column: 39
          },
          end: {
            line: 7,
            column: 60
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 9,
            column: 34
          }
        },
        loc: {
          start: {
            line: 9,
            column: 40
          },
          end: {
            line: 9,
            column: 62
          }
        },
        line: 9
      },
      "3": {
        name: "logoutUser",
        decl: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 11,
            column: 26
          }
        },
        loc: {
          start: {
            line: 11,
            column: 28
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 11
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 12,
            column: 12
          }
        },
        loc: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {},
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
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3b24710385532734173eaddc5cc80f7d7d0ec1fa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

export const LOGOUT_USER = (cov_13t8ikjm5k.s[0]++, "LOGOUT_USER");
export const CLEAR_PLAID = (cov_13t8ikjm5k.s[1]++, "CLEAR_PLAID");
export const CLEAR_BLOCKS = (cov_13t8ikjm5k.s[2]++, "CLEAR_BLOCKS");
cov_13t8ikjm5k.s[3]++;
export const logoutClearLogin = () => {
  cov_13t8ikjm5k.f[0]++;
  cov_13t8ikjm5k.s[4]++;
  return {
    type: LOGOUT_USER
  };
};
cov_13t8ikjm5k.s[5]++;
export const logoutClearPlaid = () => {
  cov_13t8ikjm5k.f[1]++;
  cov_13t8ikjm5k.s[6]++;
  return {
    type: CLEAR_PLAID
  };
};
cov_13t8ikjm5k.s[7]++;
export const logoutClearBlocks = () => {
  cov_13t8ikjm5k.f[2]++;
  cov_13t8ikjm5k.s[8]++;
  return {
    type: CLEAR_BLOCKS
  };
};
export function logoutUser() {
  cov_13t8ikjm5k.f[3]++;
  cov_13t8ikjm5k.s[9]++;
  return function (dispatch) {
    cov_13t8ikjm5k.f[4]++;
    cov_13t8ikjm5k.s[10]++;
    sessionStorage.clear();
    cov_13t8ikjm5k.s[11]++;
    localStorage.clear();
    cov_13t8ikjm5k.s[12]++;
    dispatch(logoutClearLogin());
    cov_13t8ikjm5k.s[13]++;
    dispatch(logoutClearPlaid());
    cov_13t8ikjm5k.s[14]++;
    dispatch(logoutClearBlocks());
  };
}