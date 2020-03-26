var cov_d5v2iksrd = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Blocks_Components/TableHead.js";
  var hash = "c7282a4cbd1dc0187eda16f05da567e29d088f43";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Blocks_Components/TableHead.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 1
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "2": {
        start: {
          line: 13,
          column: 5
        },
        end: {
          line: 13,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 26
          },
          end: {
            line: 6,
            column: 27
          }
        },
        loc: {
          start: {
            line: 6,
            column: 45
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 12,
            column: 20
          }
        },
        loc: {
          start: {
            line: 13,
            column: 5
          },
          end: {
            line: 13,
            column: 31
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c7282a4cbd1dc0187eda16f05da567e29d088f43"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import '../../index.css';
import './index.css';
cov_d5v2iksrd.s[0]++;
export const TableHeads = ({
  CellNames
}) => {
  cov_d5v2iksrd.f[0]++;
  cov_d5v2iksrd.s[1]++;
  // This component creates a row of headers for the LinkedBlocks table
  // CellNames is an array of all the header names (strings)
  return <thead>
			<tr className='table-header'>
				{CellNames.map(name => {
        cov_d5v2iksrd.f[1]++;
        cov_d5v2iksrd.s[2]++;
        return <th key={name}>{name}</th>;
      })}
			</tr>
		</thead>;
};