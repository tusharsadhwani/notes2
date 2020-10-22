import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";

export const NoteListItem = ({ note, selected, onClick }) => {
  const { title } = useContext(NoteContext);

  return (
    <div
      style={{
        padding: 20,
        borderBottom: "1px solid #ddd",
        background: selected ? "#ccc" : undefined,
      }}
      onClick={onClick}
    >
      {(selected ? title : note.title) || "Untitled Note"}
    </div>
  );
};
