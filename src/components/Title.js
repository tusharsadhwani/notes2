import React from "react";
import classes from "./Title.module.css";
import FancyButton from "./FancyButton";

const Title = (props) => {
  return (
    <div className={classes.Title}>
      <section style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <input placeholder="Title" />
        </div>
        <FancyButton onClick={props.prettify} />
      </section>
      <section></section>
    </div>
  );
};

export default Title;
