import React from "react";
import classes from "./FancyButton.module.css";

function FancyButton(props) {
  return (
    <button onClick={props.onClick} className={classes.fancy}>
      Prettify
    </button>
  );
}

export default FancyButton;
