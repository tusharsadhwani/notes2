import React, { useContext } from "react";
import classes from "./Title.module.css";
import FancyButton from "./FancyButton";
import NoteContext from "../contexts/NoteContext";

interface TitleProps {
  prettify: () => void;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, setTitle } = useContext(NoteContext);

  return (
    <div className={classes.Title}>
      <section style={{ display: "flex", padding: 10, paddingBottom: 0 }}>
        <div style={{ flexGrow: 1, display: "flex" }}>
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
