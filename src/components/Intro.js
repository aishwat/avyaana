import React from "react";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Profile from "../assets/profile_pic.jpeg";
import Typography from "@material-ui/core/Typography";
// import Contact from "./Contact";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
  grid: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
  },
  profile_pic: {
    maxWidth: 400,
    height: 400,
    backgroundImage: `url(${Profile})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    // margin: "20px",
    // border: "1px solid grey",
  },

  // profile_pic: {
  //   maxWidth: "100%",
  //   width: "450px",
  // },
  profile_text: {
    textAlign: "left",
    margin: "auto",
    // margin: "40px 0px 0px 20px",
    // border: "1px solid red",
  },
  title: {
    marginBottom: "20px",
  },
  border: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
}));

const Intro = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  const onMouseEnterHandler = (id) => (e) => {
    console.log("enter handler", id);
    setActiveStep(id);
  };
  const onMouseLeaveHandler = (id) => (e) => {
    console.log("leave handler", id);
    setActiveStep(0);
  };
  const onClickHandler = () => {
    navigate('/pics');
  };

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={6} className={classes.border}>
        <div className={classes.profile_text}>
          <Typography variant="h5" component="h2" color="primary">
            Welcome to Avyaana's home page
          </Typography>
          {/*<Typography className={classes.title} color="secondary" gutterBottom>*/}
          {/*  Cute little monster*/}
          {/*</Typography>*/}
          {/*<Contact />*/}
          <Typography
            variant="subtitle1"
            className={classes.wrapIcon}
            style={{
              color: "rgba(10,10,10, 0.7)",
              margin: "40px"
            }}
          >
            <Icon className={"fas fa-wrench"} style={{marginRight:"20px"}}/> Site under construction !!
          </Typography>
        </div>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <img src={Profile} className={classes.profile_pic} />
      </Grid> */}
      <Grid
        item
        sm={5}
        xs={12}
        className={classes.border}
        onMouseEnter={onMouseEnterHandler("profile_pic")}
        onMouseLeave={onMouseLeaveHandler("profile_pic")}
        onClick={onClickHandler}
      >
        <Paper
          className={classes.profile_pic}
          elevation={activeStep === "profile_pic" ? 8 : 2}
        />
      </Grid>
    </Grid>
  );
};

export default Intro;
