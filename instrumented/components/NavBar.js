var cov_1ruqqqj2ph = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/NavBar.js";
  var hash = "ac1e0ebc407ba57cbb9173c9e9cfeca1a2664f0f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/NavBar.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 1
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "1": {
        start: {
          line: 33,
          column: 1
        },
        end: {
          line: 38,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "NavBar",
        decl: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 10,
            column: 22
          }
        },
        loc: {
          start: {
            line: 10,
            column: 46
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 32,
            column: 9
          },
          end: {
            line: 32,
            column: 24
          }
        },
        loc: {
          start: {
            line: 32,
            column: 32
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 32
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 6
          },
          end: {
            line: 23,
            column: 11
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 6
          }
        }, {
          start: {
            line: 21,
            column: 7
          },
          end: {
            line: 23,
            column: 11
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ac1e0ebc407ba57cbb9173c9e9cfeca1a2664f0f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { connect } from 'react-redux';
import logo from '../media/images/Background.png';
import head from '../media/images/budget_blocks.png';
import { Link } from 'react-router-dom';
import './main.css';
import { logoutUser } from '../redux/actions/LogoutAction';
export function NavBar({
  navState,
  logoutUser
}) {
  cov_1ruqqqj2ph.f[0]++;
  cov_1ruqqqj2ph.s[0]++;
  // This component creates the Navbar at the top. has logout functionality and displays logo
  return <div className='nav-bar'>
			<div className='nav-logo'>
				<img className='image' src={logo} />
				<img className='heading' src={head} />
			</div>
			<div className='nav-action'>
				{navState === "" ? (cov_1ruqqqj2ph.b[0][0]++, "") : (cov_1ruqqqj2ph.b[0][1]++, <Link onClick={logoutUser} to='/login'>
					Log Out
				</Link>)}
			</div>
		</div>;
}

function mapStateToProps(state) {
  cov_1ruqqqj2ph.f[1]++;
  cov_1ruqqqj2ph.s[1]++;
  return {
    navState: state.loginReducer.navState
  };
}

export default connect(mapStateToProps, {
  logoutUser
})(NavBar);