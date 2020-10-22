import React from "react";
import classes from "./Editor.module.css";
import TextareaAutosize from "react-autosize-textarea";

interface EditorProps {
  value: string;
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  prettify: () => void;
}

const Editor: React.FC<EditorProps> = (props) => (
  <div className={classes.editorWrapper}>
    <TextareaAutosize
      onChange={props.onChange}
      value={props.value}
      className={classes.editor}
    />
  </div>
);

export default Editor;
