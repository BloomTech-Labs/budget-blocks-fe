var cov_1jaoyyb30v = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/tests/Balance.spec.js";
  var hash = "052092592093b67a503ac14f98d7305db73f3647";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/tests/Balance.spec.js",
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
          line: 15,
          column: 3
        }
      },
      "2": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "3": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 36
        }
      },
      "4": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "5": {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 19,
          column: 60
        }
      },
      "6": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 41
        }
      },
      "7": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 67
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 34
          },
          end: {
            line: 9,
            column: 35
          }
        },
        loc: {
          start: {
            line: 9,
            column: 40
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 76
          },
          end: {
            line: 18,
            column: 77
          }
        },
        loc: {
          start: {
            line: 18,
            column: 82
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "052092592093b67a503ac14f98d7305db73f3647"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
import { Balance } from "../Balance_Components/Balance";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
cov_1jaoyyb30v.s[0]++;
configure({
  adapter: new Adapter()
});
cov_1jaoyyb30v.s[1]++;
test("Balance renders correctly", () => {
  cov_1jaoyyb30v.f[0]++;
  const wrapper = (cov_1jaoyyb30v.s[2]++, shallow(<Balance LinkedAccount={false} balance={{
    accounts: []
  }} />));
  cov_1jaoyyb30v.s[3]++;
  expect(wrapper).toMatchSnapshot();
}); // No props are being passed into this test

cov_1jaoyyb30v.s[4]++;
test("Balance renders Link account component when Linked Account is false", () => {
  cov_1jaoyyb30v.f[1]++;
  const wrapper = (cov_1jaoyyb30v.s[5]++, shallow(<Balance LinkedAccount={false} />));
  cov_1jaoyyb30v.s[6]++;
  console.log(wrapper.props().className);
  cov_1jaoyyb30v.s[7]++;
  expect(wrapper.props().className).toBe("makeStyles-NoBalance-1");
});