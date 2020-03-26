var cov_16sw8u431c = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/ProgressBar.js";
  var hash = "1d8561cf0f11ae18d99cf6deca0f1bc646944e0e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/TotalBudget_Components/ProgressBar.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 5,
          column: 39
        }
      },
      "2": {
        start: {
          line: 6,
          column: 1
        },
        end: {
          line: 9,
          column: 9
        }
      },
      "3": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 52
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 21
        }
      },
      "5": {
        start: {
          line: 10,
          column: 1
        },
        end: {
          line: 16,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 20
          },
          end: {
            line: 4,
            column: 21
          }
        },
        loc: {
          start: {
            line: 4,
            column: 34
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 12
          },
          end: {
            line: 6,
            column: 13
          }
        },
        loc: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 9,
            column: 2
          }
        },
        line: 6
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1d8561cf0f11ae18d99cf6deca0f1bc646944e0e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { useState } from 'react';
cov_16sw8u431c.s[0]++;

const ProgressBar = ({
  done
}) => {
  cov_16sw8u431c.f[0]++;
  const [style, setStyle] = (cov_16sw8u431c.s[1]++, useState({}));
  cov_16sw8u431c.s[2]++;
  setTimeout(() => {
    cov_16sw8u431c.f[1]++;
    const newStyle = (cov_16sw8u431c.s[3]++, {
      opacity: 1,
      width: `${done}%`
    });
    cov_16sw8u431c.s[4]++;
    setStyle(newStyle);
  }, 200);
  cov_16sw8u431c.s[5]++;
  return <div className='progress'>
			<div className='progress-done' style={style}>
				{done}%
			</div>
		</div>;
};

export default ProgressBar;