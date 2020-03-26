var cov_v1h84ijei = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Transactions_Components/DisplayTrans.js";
  var hash = "8704548b957ce485a70e68e541dc14627d3fd908";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Transactions_Components/DisplayTrans.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 1
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 38,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 7,
            column: 22
          }
        },
        loc: {
          start: {
            line: 7,
            column: 43
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 39,
            column: 4
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 10
          },
          end: {
            line: 27,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 45
          }
        }, {
          start: {
            line: 27,
            column: 48
          },
          end: {
            line: 27,
            column: 70
          }
        }],
        line: 27
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
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8704548b957ce485a70e68e541dc14627d3fd908"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import './index.css';
import Card from '@material-ui/core/Card';
import DeleteTranModal from './DeleteTranModal';
cov_v1h84ijei.s[0]++;

const DisplayTrans = ({
  arr,
  classes
}) => {
  cov_v1h84ijei.f[0]++;
  cov_v1h84ijei.s[1]++;
  // This component maps through the transactions array and displays them
  return <div className='transactions'>
			{arr.map(i => {
      cov_v1h84ijei.f[1]++;
      cov_v1h84ijei.s[2]++;
      return <Card className={classes.card} key={i.id}>
						<div className={classes.rightInfo}>
							<p>{`Purchase Authorized from ${i.name}`}</p>
							<p>{i.payment_date}</p>
							<p>Category: {i.category}</p>
						</div>
						<div className={classes.leftInfo}>
							<div>
								<DeleteTranModal transID={i.id} />
							</div>
							<div>
								<p id='trans-amount' className={i.amount < 0 ? (cov_v1h84ijei.b[0][0]++, 'red bottom-content') : (cov_v1h84ijei.b[0][1]++, 'green bottom-content')}>
									{(Math.round(10 * i.amount) / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
								</p>
							</div>
						</div>
					</Card>;
    })}
		</div>;
};

export default DisplayTrans;