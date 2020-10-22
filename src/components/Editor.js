import React from "react";
import classes from "./Editor.module.css";
import TextareaAutosize from "react-autosize-textarea";

const Editor = (props) => (
  <div className={classes.editorWrapper}>
    <TextareaAutosize
      onChange={props.onChange}
      value={props.value}
      className={classes.editor}
    />
  </div>
);

export default Editor;
