var cov_o8fridqe8 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Balance_Components/Balance.js";
  var hash = "d7d9347f2a028cc0b24f606b53e5bd846ade3ff6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Balance_Components/Balance.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 31
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "3": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "4": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "5": {
        start: {
          line: 33,
          column: 1
        },
        end: {
          line: 35,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 23
          },
          end: {
            line: 8,
            column: 24
          }
        },
        loc: {
          start: {
            line: 8,
            column: 46
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 8
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
            line: 36,
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
            line: 16,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d7d9347f2a028cc0b24f606b53e5bd846ade3ff6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { connect } from 'react-redux';
import LinkAccount from '../LinkAccount';
import plaidImg from '../../media/image/PlaidIcon.png';
import { useStyles } from './balanceStyle';
import Card from '@material-ui/core/Card';
cov_o8fridqe8.s[0]++;
export const Balance = ({
  LinkedAccount
}) => {
  cov_o8fridqe8.f[0]++;
  //This component was originally meant to be used on the dashboard. If the user had a manual account and wanted to swith to using plaid: this component would allow that
  //In the current version, you cannot have a mix of plaid and manual so this component is only used in the onboarding process
  //uses styling from the balanceStlye file. 
  const classes = (cov_o8fridqe8.s[1]++, useStyles());
  cov_o8fridqe8.s[2]++;

  if (LinkedAccount === false) {
    cov_o8fridqe8.b[0][0]++;
    cov_o8fridqe8.s[3]++;
    //if the user's account does not use plaid then it displays component to connect bank account
    return <Card className={classes.NoBalance}>
            <LinkAccount />
            <img src={plaidImg} className="plaidIcon" alt="Plaid Icon" />
        </Card>;
  } else {
    cov_o8fridqe8.b[0][1]++;
    cov_o8fridqe8.s[4]++;
    //if the user has already connected their bank account then display nothing
    return <p></p>;
  }
};

function mapStateToProps(state) {
  cov_o8fridqe8.f[1]++;
  cov_o8fridqe8.s[5]++;
  return {
    LinkedAccount: state.loginReducer.user.LinkedAccount
  };
}

export default connect(mapStateToProps, {})(Balance);