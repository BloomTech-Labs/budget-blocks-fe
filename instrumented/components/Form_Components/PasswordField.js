var cov_jnn1gnwl5 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/PasswordField.js";
  var hash = "ac110ea82f43e034bc1002b09c021eff705deed1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Form_Components/PasswordField.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 37
        },
        end: {
          line: 14,
          column: 52
        }
      },
      "2": {
        start: {
          line: 16,
          column: 36
        },
        end: {
          line: 18,
          column: 7
        }
      },
      "3": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 31
        }
      },
      "4": {
        start: {
          line: 20,
          column: 36
        },
        end: {
          line: 22,
          column: 7
        }
      },
      "5": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "6": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 22
          },
          end: {
            line: 10,
            column: 23
          }
        },
        loc: {
          start: {
            line: 10,
            column: 95
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 16,
            column: 37
          }
        },
        loc: {
          start: {
            line: 16,
            column: 42
          },
          end: {
            line: 18,
            column: 7
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 20,
            column: 36
          },
          end: {
            line: 20,
            column: 37
          }
        },
        loc: {
          start: {
            line: 20,
            column: 45
          },
          end: {
            line: 22,
            column: 7
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 26
          },
          end: {
            line: 31,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 37
          },
          end: {
            line: 31,
            column: 43
          }
        }, {
          start: {
            line: 31,
            column: 46
          },
          end: {
            line: 31,
            column: 56
          }
        }],
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 45,
            column: 29
          },
          end: {
            line: 49,
            column: 29
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 46,
            column: 28
          },
          end: {
            line: 46,
            column: 42
          }
        }, {
          start: {
            line: 48,
            column: 28
          },
          end: {
            line: 48,
            column: 45
          }
        }],
        line: 45
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ac110ea82f43e034bc1002b09c021eff705deed1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
cov_jnn1gnwl5.s[0]++;

const PasswordField = ({
  name,
  placeholder,
  label,
  value,
  handleChange,
  error,
  helperText
}) => {
  cov_jnn1gnwl5.f[0]++;
  // This component creates a password field for a form (used in login and register)
  // all values in props are values set to the text field
  // viewPass is a boolean that determines whether the text field is text or password field
  const [viewPass, setViewPass] = (cov_jnn1gnwl5.s[1]++, useState(false));
  cov_jnn1gnwl5.s[2]++;

  const handleClickShowPassword = () => {
    cov_jnn1gnwl5.f[1]++;
    cov_jnn1gnwl5.s[3]++;
    setViewPass(!viewPass);
  };

  cov_jnn1gnwl5.s[4]++;

  const handleMouseDownPassword = event => {
    cov_jnn1gnwl5.f[2]++;
    cov_jnn1gnwl5.s[5]++;
    event.preventDefault();
  };

  cov_jnn1gnwl5.s[6]++;
  return <FormControl variant="filled">
                <Typography className="label"> {label} </Typography>
                <TextField error={error} helperText={helperText} placeholder={placeholder} type={viewPass ? (cov_jnn1gnwl5.b[0][0]++, "text") : (cov_jnn1gnwl5.b[0][1]++, "password")} onChange={handleChange} value={value} name={name} variant="outlined" InputProps={{
      endAdornment: <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                            {viewPass ? (cov_jnn1gnwl5.b[1][0]++, <Visibility />) : (cov_jnn1gnwl5.b[1][1]++, <VisibilityOff />)}
                        </IconButton>
                        </InputAdornment>
    }} />
        </FormControl>;
};

export default PasswordField;