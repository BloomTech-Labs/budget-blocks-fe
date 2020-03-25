var cov_s7y50zjpn = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/PrivateRoute.js";
  var hash = "06c0f217b390632c4bcdd87f4508eb2ae99f2145";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/PrivateRoute.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 12,
          column: 9
        }
      },
      "2": {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 11,
          column: 9
        }
      },
      "3": {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "4": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 21
          },
          end: {
            line: 5,
            column: 22
          }
        },
        loc: {
          start: {
            line: 5,
            column: 65
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 7,
            column: 9
          }
        },
        loc: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 11,
            column: 9
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 25
          }
        },
        loc: {
          start: {
            line: 15,
            column: 33
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 11,
            column: 9
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 12
          },
          end: {
            line: 8,
            column: 35
          }
        }, {
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 10,
            column: 35
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "06c0f217b390632c4bcdd87f4508eb2ae99f2145"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
cov_s7y50zjpn.s[0]++;

const PrivateRoute = ({
  component: Component,
  token,
  ...rest
}) => {
  cov_s7y50zjpn.f[0]++;
  cov_s7y50zjpn.s[1]++;
  return <Route {...rest} render={props => {
    cov_s7y50zjpn.f[1]++;
    cov_s7y50zjpn.s[2]++;
    return token ? (cov_s7y50zjpn.b[0][0]++, <Component {...props} />) : (cov_s7y50zjpn.b[0][1]++, <Redirect to="/login" />);
  }} />;
};

cov_s7y50zjpn.s[3]++;

const mapStateToProps = state => {
  cov_s7y50zjpn.f[2]++;
  cov_s7y50zjpn.s[4]++;
  return {
    token: state.loginReducer.user.token
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);