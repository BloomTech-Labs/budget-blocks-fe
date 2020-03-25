var cov_27r3rmcnz = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/styles.js";
  var hash = "b73d8fe22c17abded5420d12b388c0f394f2ed33";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/components/Modal_Components/styles.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 22
        },
        end: {
          line: 12,
          column: 4
        }
      },
      "1": {
        start: {
          line: 1,
          column: 32
        },
        end: {
          line: 12,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 22
          },
          end: {
            line: 1,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1,
            column: 32
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 1
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
    hash: "b73d8fe22c17abded5420d12b388c0f394f2ed33"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_27r3rmcnz.s[0]++;
export const styles = theme => {
  cov_27r3rmcnz.f[0]++;
  cov_27r3rmcnz.s[1]++;
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: "#00000"
    }
  };
};