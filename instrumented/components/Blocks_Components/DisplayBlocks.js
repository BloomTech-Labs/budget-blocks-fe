var cov_16dnzaactf = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Blocks_Components/DisplayBlocks.js";
  var hash = "5ca7b5f8505c9eda3566e4f679a3c75db3476c52";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Blocks_Components/DisplayBlocks.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      "2": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 40,
          column: 13
        }
      },
      "3": {
        start: {
          line: 35,
          column: 29
        },
        end: {
          line: 35,
          column: 56
        }
      },
      "4": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 50,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 7,
            column: 23
          }
        },
        loc: {
          start: {
            line: 7,
            column: 48
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 15
          },
          end: {
            line: 16,
            column: 16
          }
        },
        loc: {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 40,
            column: 13
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 23
          },
          end: {
            line: 35,
            column: 24
          }
        },
        loc: {
          start: {
            line: 35,
            column: 29
          },
          end: {
            line: 35,
            column: 56
          }
        },
        line: 35
      },
      "3": {
        name: "mapStateToProps",
        decl: {
          start: {
            line: 46,
            column: 9
          },
          end: {
            line: 46,
            column: 24
          }
        },
        loc: {
          start: {
            line: 46,
            column: 32
          },
          end: {
            line: 51,
            column: 1
          }
        },
        line: 46
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 23,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 17
          }
        }, {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 60
          }
        }],
        line: 21
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 29,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 28,
            column: 17
          }
        }, {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 61
          }
        }],
        line: 27
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
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5ca7b5f8505c9eda3566e4f679a3c75db3476c52"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import DeleteBlockModal from "./DeleteBlockModal";
cov_16dnzaactf.s[0]++;

const DisplayBlocks = ({
  arr,
  handleClick
}) => {
  cov_16dnzaactf.f[0]++;
  cov_16dnzaactf.s[1]++;
  // This components maps through the blocks and displays them on the table.
  // the arr is the array of blocks that are to be displayed.
  // the handleClick is a function from LinkedBlocks. it displays and populates the modal to edit the block with the info from the block clicked
  // new categories have a default of null for budget and total. if they are null then it will display as 0.
  // total refers to the total amount of money spent. (Transactions tied to that block added together)
  // budget refers to the limit of the block
  return <tbody className="table-body">
      {arr.map(i => {
      cov_16dnzaactf.f[1]++;
      cov_16dnzaactf.s[2]++;
      return <tr key={i.id}>
          <td>{i.name}</td>
          <td>
            $
            {i.total === null ? (cov_16dnzaactf.b[0][0]++, 0) : (cov_16dnzaactf.b[0][1]++, (Math.round(100 * i.total) / 100).toFixed(2))}
          </td>
          <td>
            $
            {i.budget === null ? (cov_16dnzaactf.b[1][0]++, 0) : (cov_16dnzaactf.b[1][1]++, (Math.round(100 * i.budget) / 100).toFixed(2))}
          </td>
          <td>
            <DeleteBlockModal blockID={i.id} />
            <button id="edit-button" onClick={() => {
            cov_16dnzaactf.f[2]++;
            cov_16dnzaactf.s[3]++;
            return handleClick(i.id, i.budget);
          }}>
              edit
            </button>
          </td>
        </tr>;
    })}
    </tbody>;
};

function mapStateToProps(state) {
  cov_16dnzaactf.f[3]++;
  cov_16dnzaactf.s[4]++;
  return {
    userID: state.loginReducer.user.id,
    blocks: state.plaidReducer.categories
  };
}

export default connect(mapStateToProps)(DisplayBlocks);