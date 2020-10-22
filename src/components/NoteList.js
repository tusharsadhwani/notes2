import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import { addNote, getNotes } from "../utils/notes";
import FancyButton from "./FancyButton";

const NoteListItem = ({ note, onClick }) => (
  <div
    style={{ padding: 20, borderBottom: "1px solid #ddd" }}
    onClick={onClick}
  >
    {note.title}
  </div>
);

const NoteList = () => {
  const { notes, refreshNotes, selectNote } = useContext(NoteContext);

  const refreshNoteList = () => {
    refreshNotes();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Notes
        <FancyButton
          title="Add"
          onClick={() => {
            addNote("haha", "yes");
            refreshNotes();
          }}
        />
      </div>
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {notes.map((note, index) => (
          <NoteListItem
            key={note.id}
            note={note}
            onClick={() => selectNote(notes[index])}
          />
        ))}
      </div>
    </>
  );
};

export default NoteList;
