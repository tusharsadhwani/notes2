import React, { useContext } from "react";
import classes from "./Editor.module.css";
import TextareaAutosize from "react-autosize-textarea";
import NoteContext from "src/contexts/NoteContext";
import { debounce } from "src/utils/debounce";

interface EditorProps {
  value: string;
  prettify: () => void;
}

const Editor: React.FC<EditorProps> = (props) => {
  const { contentChange, noteId, title, updateNote } = useContext(NoteContext);
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newContent = event.currentTarget.value;
    contentChange(newContent);
    debounce("update content", () => {
      updateNote(noteId, title, newContent);
    });
  };

  return (
    <div className={classes.editorWrapper}>
      <TextareaAutosize
        onChange={handleContentChange}
        value={props.value}
        className={classes.editor}
      />
    </div>
  );
};

export default Editor;
