import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import FancyButton from "./FancyButton";
import { NoteListItem } from "./NoteListItem";

const NoteList = () => {
  const { notes, addNote, refreshNotes, selectNote, noteId } = useContext(
    NoteContext
  );

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
            const newNote = addNote();
            selectNote(newNote);
            refreshNotes();
          }}
        />
      </div>
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {notes.map((note, index) => {
          const isSelected = note.id === noteId;

          return (
            <NoteListItem
              key={note.id}
              note={note}
              selected={isSelected}
              onClick={() => selectNote(notes[index])}
            />
          );
        })}
      </div>
    </>
  );
};

export default NoteList;
