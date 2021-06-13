import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    padding: "10px",
    overflowX: "scroll",
  
  },
}));

const contacts = [
  {
    id: "LinkedIn",
    color: "rgba(40,103,178)",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/leena-1207/",
  },
  {
    id: "GoogleScholar",
    color: "#4d90fe",
    icon: "fas fa-graduation-cap",
    url: "https://scholar.google.com/citations?user=-2bF80IAAAAJ&hl=en",
  },
  {
    id: "Researchgate",
    color: "#0cb",
    icon: "fab fa-researchgate",
    url: "https://www.researchgate.net/profile/Leena-Singh",
  },

  {
    id: "leena.singh@okstate.edu",
    color: "#bc00f5",
    icon: "fas fa-envelope",
    url: "mailto:leena.singh@okstate.edu",
  },
  {
    id: "Maps",
    color: "#7B3AE5",
    icon: "fas fa-map-marked",
    url: "https://goo.gl/maps/VFzVJPa3pLPW6z6N8",
  },
];

const Contact = (props) => {
  const classes = useStyles();

  const [activeCard, setActiveCard] = React.useState(0);
  const onMouseEnterHandler = (i) => (e) => {
    console.log("enter handler", i);
    setActiveCard(i);
  };
  const onMouseLeaveHandler = (i) => (e) => {
    console.log("leave handler", i);
    setActiveCard(0);
  };

  const onClickHandler = (url) => (e) => {
    console.log(url);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const fabButtons = contacts.map((contact) => (
    <Fab
      size="large"
      key={contact.id}
      onMouseEnter={onMouseEnterHandler(contact.id)}
      onMouseLeave={onMouseLeaveHandler(contact.id)}
      onClick={onClickHandler(contact.url)}
      variant="extended"
      style={{
        backgroundColor: contact.color,
        color: "white",
        marginRight: props.displayInline ? "" : "3%",
      }}
      aria-label={contact.id}
    >
      <Icon className={contact.icon} />
      {activeCard === contact.id && (
        <p
          style={{
            marginLeft: "10px",
            textTransform: "none",
          }}
        >
          {contact.id}
        </p>
      )}
    </Fab>
  ));
  return (
    <div
      className={classes.root}
      style={{ marginTop: props.displayInline ? "auto" : "60px" }}
    >
      {props.displayInline ? (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {fabButtons}
        </ButtonGroup>
      ) : (
        fabButtons
      )}
    </div>
  );
};

export default Contact;
Contact.propTypes = {
  displayInline: PropTypes.string,
};
