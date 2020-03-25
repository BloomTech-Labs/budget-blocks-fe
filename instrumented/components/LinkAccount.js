var cov_2fwifzwj7s = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/LinkAccount.js";
  var hash = "1047de1668fad03200ccb167f50f1cb49e4c298b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/LinkAccount.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 44
        }
      },
      "2": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 44
        }
      },
      "3": {
        start: {
          line: 16,
          column: 1
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "4": {
        start: {
          line: 37,
          column: 1
        },
        end: {
          line: 40,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 20
          },
          end: {
            line: 7,
            column: 21
          }
        },
        loc: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "handleOnSuccess",
        decl: {
          start: {
            line: 9,
            column: 10
          },
          end: {
            line: 9,
            column: 25
          }
        },
        loc: {
          start: {
            line: 9,
            column: 43
          },
          end: {
            line: 11,
            column: 2
          }
        },
        line: 9
      },
      "2": {
        name: "handleOnExit",
        decl: {
          start: {
            line: 12,
            column: 10
          },
          end: {
            line: 12,
            column: 22
          }
        },
        loc: {
          start: {
            line: 12,
            column: 25
          },
          end: {
            line: 14,
            column: 2
          }
        },
        line: 12
      },
      "3": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 36,
            column: 9
          },
          end: {
            line: 36,
            column: 24
          }
        },
        loc: {
          start: {
            line: 36,
            column: 32
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 36
      }
    },
    branchMap: {},
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
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1047de1668fad03200ccb167f50f1cb49e4c298b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import './linkAccountStyle.css';
import PlaidLink from 'react-plaid-link';
import { connect } from 'react-redux';
import { sendLinkToken } from '../redux/actions/PlaidActions';
import '../index.css';
cov_2fwifzwj7s.s[0]++;

const LinkAccount = props => {
  cov_2fwifzwj7s.f[0]++;

  // This component creates the button that brings up the modal for the user to enter banking information to connect via plaid
  function handleOnSuccess(token, metadata) {
    cov_2fwifzwj7s.f[1]++;
    cov_2fwifzwj7s.s[1]++;
    props.sendLinkToken(token, props.user.id);
  }

  function handleOnExit() {
    cov_2fwifzwj7s.f[2]++;
    cov_2fwifzwj7s.s[2]++;
    console.log("Plaid Component has exited");
  }

  cov_2fwifzwj7s.s[3]++;
  return <div className='plaid-container'>
			<div className='LinkAccount'>
				<PlaidLink clientName='Budget Blocks' env='sandbox' product={['auth', 'transactions', 'identity']} publicKey={process.env.REACT_APP_PUBLIC_KEY} onExit={handleOnExit} onSuccess={handleOnSuccess} webhook='https://lambda-budget-blocks.herokuapp.com/plaid/webhook' className='plaidButton'>
					Connect Bank Account
				</PlaidLink>
			</div>
		</div>;
};

function mapStateToProps(state) {
  cov_2fwifzwj7s.f[3]++;
  cov_2fwifzwj7s.s[4]++;
  return {
    error: state.plaidReducer.error,
    user: state.loginReducer.user
  };
}

export default connect(mapStateToProps, {
  sendLinkToken
})(LinkAccount);