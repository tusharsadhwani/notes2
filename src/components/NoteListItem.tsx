import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import classes from "./NoteListItem.module.css";

interface NoteListItemProps {
  note: Note;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const NoteListItem: React.FC<NoteListItemProps> = ({
  note,
  selected,
  onClick,
}) => {
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
