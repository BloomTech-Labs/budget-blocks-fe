var cov_2pnahyf4n4 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Loading.js";
  var hash = "e0b7184d14f2885c0fb985b0f3492ba0fd6cf83e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Loading.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 1
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "2": {
        start: {
          line: 23,
          column: 1
        },
        end: {
          line: 26,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 5,
            column: 24
          }
        },
        loc: {
          start: {
            line: 5,
            column: 32
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 24
          }
        },
        loc: {
          start: {
            line: 22,
            column: 32
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 17,
            column: 18
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 16,
            column: 6
          }
        }, {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 16
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 23
          }
        }, {
          start: {
            line: 9,
            column: 27
          },
          end: {
            line: 9,
            column: 46
          }
        }, {
          start: {
            line: 9,
            column: 50
          },
          end: {
            line: 9,
            column: 71
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e0b7184d14f2885c0fb985b0f3492ba0fd6cf83e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
cov_2pnahyf4n4.s[0]++;
export const Loading = props => {
  cov_2pnahyf4n4.f[0]++;
  cov_2pnahyf4n4.s[1]++;
  // This component displays a loading animation if there is something loading in redux
  return <div id='loading'>
			{(cov_2pnahyf4n4.b[1][0]++, props.plaidFetching) || (cov_2pnahyf4n4.b[1][1]++, props.blockFetching) || (cov_2pnahyf4n4.b[1][2]++, props.profileFetching) ? (cov_2pnahyf4n4.b[0][0]++, <Loader type='ThreeDots' color='#66aabc' height={50} width={50} timeout={10000} //3 secs
    />) : (cov_2pnahyf4n4.b[0][1]++, <p></p>)}
		</div>;
};

function mapStateToProps(state) {
  cov_2pnahyf4n4.f[1]++;
  cov_2pnahyf4n4.s[2]++;
  return {
    plaidFetching: state.plaidReducer.isFetching,
    blockFetching: state.blockReducer.isFetching
  };
}

export default connect(mapStateToProps, {})(Loading);