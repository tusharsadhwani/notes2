import React, { useContext } from "react";
import classes from "./Title.module.css";
import FancyButton from "./FancyButton";
import NoteContext from "../contexts/NoteContext";

const Title = (props) => {
  const { title, setTitle } = useContext(NoteContext);

  return (
    <div className={classes.Title}>
      <section style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <FancyButton title="Prettify" onClick={props.prettify} />
      </section>
      <section></section>
    </div>
  );
};

export default Title;
