import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subHeader: {
    fontSize: "20pt",
    letterSpacing: "2px",
    color: "#3f51b5",
    fontWeight: "700",
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

const SubHeader = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.subHeader} elevation={0} {...props}>
      {props.children}
    </Paper>
  );
};

export default SubHeader;
