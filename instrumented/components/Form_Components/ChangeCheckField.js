var cov_2nhaaxsntp = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/ChangeCheckField.js";
  var hash = "24bbc1a46138dc795c230d62f70f4ae0e3165758";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/ChangeCheckField.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 32
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 5,
          column: 32
        }
      },
      "2": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "3": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 11,
          column: 10
        }
      },
      "4": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 17,
          column: 10
        }
      },
      "5": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 32
          },
          end: {
            line: 1,
            column: 33
          }
        },
        loc: {
          start: {
            line: 1,
            column: 46
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        }, {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        }],
        line: 6
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
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "24bbc1a46138dc795c230d62f70f4ae0e3165758"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_2nhaaxsntp.s[0]++;
export const ChangeCheckField = (e, values) => {
  cov_2nhaaxsntp.f[0]++;
  // this function checks to see if the value given is valid for login. 
  // If the value is valid: do not show error and message
  // If it is invalid: show error and message
  let newValues = (cov_2nhaaxsntp.s[1]++, { ...values
  });
  cov_2nhaaxsntp.s[2]++;

  if (e.target.value.trim() === "") {
    cov_2nhaaxsntp.b[0][0]++;
    cov_2nhaaxsntp.s[3]++;
    newValues = { ...values,
      [e.target.name]: {
        error: true,
        helperText: `${e.target.name} is required`
      }
    };
  } else {
    cov_2nhaaxsntp.b[0][1]++;
    cov_2nhaaxsntp.s[4]++;
    newValues = { ...values,
      [e.target.name]: {
        error: false,
        helperText: ``
      }
    };
  }

  cov_2nhaaxsntp.s[5]++;
  return newValues;
};