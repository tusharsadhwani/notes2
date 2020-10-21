import React, { forwardRef } from "react";
import classes from "./Editor.module.css";
import TextareaAutosize from "react-autosize-textarea";

const Editor = forwardRef((props, ref) => (
  <div className={classes.editorWrapper}>
    <TextareaAutosize
      onChange={props.onChange}
      value={props.value}
      className={classes.editor}
    />
  </div>
));

export default Editor;
