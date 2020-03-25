var cov_1ftat482c3 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Dashboard.js";
  var hash = "4f1460de00e07f6b507b60a8c71704e9dc5b72a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Dashboard.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 25
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 1
        },
        end: {
          line: 20,
          column: 27
        }
      },
      "2": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 19,
          column: 63
        }
      },
      "3": {
        start: {
          line: 21,
          column: 1
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "4": {
        start: {
          line: 38,
          column: 1
        },
        end: {
          line: 44,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 25
          },
          end: {
            line: 14,
            column: 26
          }
        },
        loc: {
          start: {
            line: 14,
            column: 34
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 11
          },
          end: {
            line: 16,
            column: 12
          }
        },
        loc: {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 20,
            column: 2
          }
        },
        line: 16
      },
      "2": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 37,
            column: 9
          },
          end: {
            line: 37,
            column: 24
          }
        },
        loc: {
          start: {
            line: 37,
            column: 32
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 19,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 18,
            column: 14
          },
          end: {
            line: 18,
            column: 49
          }
        }, {
          start: {
            line: 19,
            column: 14
          },
          end: {
            line: 19,
            column: 62
          }
        }],
        line: 17
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
    hash: "4f1460de00e07f6b507b60a8c71704e9dc5b72a8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { useEffect } from 'react';
import LinkedBlocks from './Blocks_Components/LinkedBlocks';
import { connect } from 'react-redux';
import LinkedTransactions from './Transactions_Components/LinkedTransactions';
import TotalBudget from './TotalBudget_Components/TotalBudget';
import { getTransactions } from '../redux/actions/PlaidActions';
import './dashboardStyle.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../App.css';
import './main.css';
import { getManualTrans } from "../redux/actions/ManualActions";
import Loading from "./Loading";
cov_1ftat482c3.s[0]++;
export const Dashboard = props => {
  cov_1ftat482c3.f[0]++;
  cov_1ftat482c3.s[1]++;
  // This component displays the dashboard: Blocks, transactions, and budget
  useEffect(() => {
    cov_1ftat482c3.f[1]++;
    cov_1ftat482c3.s[2]++;
    props.LinkedAccount == true ? (cov_1ftat482c3.b[0][0]++, props.getTransactions(props.userID)) : (cov_1ftat482c3.b[0][1]++, props.getManualTrans(props.userID, props.history));
  }, [props.LinkedAccount]);
  cov_1ftat482c3.s[3]++;
  return <div className='app-container'>
			<Loading />
			<div className='showcase'>
				<div className='right-showcase'>
						<TotalBudget />
				</div>
				<div className='left-showcase'>
						<LinkedBlocks /> 
						<LinkedTransactions />		
				</div>
			</div>
		</div>;
};

function mapStateToProps(state) {
  cov_1ftat482c3.f[2]++;
  cov_1ftat482c3.s[4]++;
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    blocks: state.plaidReducer.categories,
    plaidFetching: state.plaidReducer.isFetching,
    blockFetching: state.blockReducer.isFetching
  };
}

export default connect(mapStateToProps, {
  getTransactions,
  getManualTrans
})(Dashboard);