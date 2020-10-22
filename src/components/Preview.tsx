import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import classes from "./Preview.module.css";

const Preview = () => {
  const { HTML } = useContext(NoteContext);

  return (
    <div className={classes.previewWrapper}>
      <div
        className={classes.preview}
        dangerouslySetInnerHTML={{ __html: HTML }}
      />
    </div>
  );
};

export default Preview;
