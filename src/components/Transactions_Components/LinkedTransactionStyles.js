import { makeStyles } from "@material-ui/core/styles";

export default theme => makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: "flex",
    width: "100%",
  },
  topcontent: {
    display: "flex",
  },
  card: {
    width: "100%",
    marginBottom: "1rem",
    height: "70%",
    background: "#f7f7f7",
    textAlign: "left",
    paddingLeft: "10px",
    display: "flex",

    fontSize: "12px",
  },
  details: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
    alignItems: "flex-start",
    textAlign: "left",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    alignContent: "flex-end",
  },
  text: {
    textAlign: "left",
    paddingLeft: theme.spacing(5),
  },
  rightInfo: {
    width: "85%",
  },
  leftInfo: {
    width: "15%",
    alignItems: "center",
  },
}));
