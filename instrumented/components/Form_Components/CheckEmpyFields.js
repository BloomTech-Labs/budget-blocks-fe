var cov_29w0rhrt72 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/CheckEmpyFields.js";
  var hash = "3d311ab77425d69a5f8fac438410e109d3ee7339";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/CheckEmpyFields.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 32
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 23
        }
      },
      "2": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 8,
          column: 31
        }
      },
      "3": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 26,
          column: 7
        }
      },
      "4": {
        start: {
          line: 11,
          column: 27
        },
        end: {
          line: 11,
          column: 40
        }
      },
      "5": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 25,
          column: 9
        }
      },
      "6": {
        start: {
          line: 14,
          column: 12
        },
        end: {
          line: 23,
          column: 14
        }
      },
      "7": {
        start: {
          line: 24,
          column: 12
        },
        end: {
          line: 24,
          column: 40
        }
      },
      "8": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "9": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 24
        }
      },
      "10": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
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
            column: 51
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 32
          },
          end: {
            line: 10,
            column: 33
          }
        },
        loc: {
          start: {
            line: 10,
            column: 41
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 25,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 25,
            column: 9
          }
        }, {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 25,
            column: 9
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        }, {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        }],
        line: 28
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3d311ab77425d69a5f8fac438410e109d3ee7339"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_29w0rhrt72.s[0]++;
export const CheckEmptyFields = (fields, values) => {
  cov_29w0rhrt72.f[0]++;
  // This function maps through the the form values and checks that they are not empty. 
  // fields is an object with the values of the form. Ex: Login uses the user object which has the values email and password
  // values is the values object from the form that stores the error and message of form fields
  // if they are empty: it will return an edited version of the values object with the error for the empty field
  // if there are no errors: it will return boolean of false
  let emptyFields = (cov_29w0rhrt72.s[1]++, 0);
  let newValues = (cov_29w0rhrt72.s[2]++, { ...values
  }); // Maps through the keys of fields object.

  cov_29w0rhrt72.s[3]++;
  Object.keys(fields).forEach(field => {
    cov_29w0rhrt72.f[1]++;
    const fieldValue = (cov_29w0rhrt72.s[4]++, fields[field]); // If the value is empty add 1 to the emptyFields counter and make that field error

    cov_29w0rhrt72.s[5]++;

    if (fieldValue.trim() === "") {
      cov_29w0rhrt72.b[0][0]++;
      cov_29w0rhrt72.s[6]++;
      newValues = { ...newValues,
        [field]: {
          error: true,
          helperText: `${field} is required`
        },
        button: {
          disabled: true
        }
      };
      cov_29w0rhrt72.s[7]++;
      emptyFields = emptyFields + 1;
    } else {
      cov_29w0rhrt72.b[0][1]++;
    }
  }); // After mapping through all fields check the emptyFields counter to see if there are any empty fields

  cov_29w0rhrt72.s[8]++;

  if (emptyFields > 0) {
    cov_29w0rhrt72.b[1][0]++;
    cov_29w0rhrt72.s[9]++;
    // if there are any empty fields then return the newValues object to set the values on the form
    return newValues;
  } else {
    cov_29w0rhrt72.b[1][1]++;
    cov_29w0rhrt72.s[10]++;
    // if there are no empty fields: return false
    return false;
  }
};