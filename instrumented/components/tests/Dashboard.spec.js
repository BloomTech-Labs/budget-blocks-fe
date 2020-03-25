var cov_2ll55m34ky = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/tests/Dashboard.spec.js";
  var hash = "a3e3457d36824fbbb1319039a12d0e903a5d591d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/tests/Dashboard.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 38
        }
      },
      "1": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "2": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 10,
          column: 75
        }
      },
      "3": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 35
          },
          end: {
            line: 9,
            column: 36
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a3e3457d36824fbbb1319039a12d0e903a5d591d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import { Dashboard } from "../Dashboard";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
cov_2ll55m34ky.s[0]++;
configure({
  adapter: new Adapter()
});
cov_2ll55m34ky.s[1]++;
test('Dashboard renders correctly', () => {
  cov_2ll55m34ky.f[0]++;
  const wrapper = (cov_2ll55m34ky.s[2]++, shallow(<Dashboard LinkedAccount={false} blocks={[]} />));
  cov_2ll55m34ky.s[3]++;
  expect(wrapper).toMatchSnapshot();
});