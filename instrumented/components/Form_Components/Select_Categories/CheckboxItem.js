var cov_dtvpsv0wk = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/Select_Categories/CheckboxItem.js";
  var hash = "eb4d7513e311c21934c3a5106d00fbb8f4e1e376";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/Select_Categories/CheckboxItem.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 21
          },
          end: {
            line: 3,
            column: 22
          }
        },
        loc: {
          start: {
            line: 3,
            column: 72
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "eb4d7513e311c21934c3a5106d00fbb8f4e1e376"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from "react";
cov_dtvpsv0wk.s[0]++;

const CheckboxItem = ({
  label,
  isSelected,
  onCheckboxChange,
  name
}) => {
  cov_dtvpsv0wk.f[0]++;
  cov_dtvpsv0wk.s[1]++;
  return <div className="form-check">
    <label>
      <input type="checkbox" name={name} checked={isSelected} onChange={onCheckboxChange} className="form-check-input" />
      {label}
    </label>
  </div>;
};

export default CheckboxItem;