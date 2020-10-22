import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import classes from "./NoteListItem.module.css";

export const NoteListItem = ({ note, selected, onClick }) => {
  const { title } = useContext(NoteContext);

  return (
    <div
      className={classes.item}
      style={{ background: selected ? "#ccc" : undefined }}
      onClick={onClick}
    >
      {(selected ? title : note.title) || "Untitled Note"}
    </div>
  );
};
