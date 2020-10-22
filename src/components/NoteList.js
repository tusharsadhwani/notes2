import React, { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import FancyButton from "./FancyButton";
import { NoteListItem } from "./NoteListItem";
import classes from "./NoteList.module.css";

const NoteList = () => {
  const { notes, addNote, refreshNotes, selectNote, noteId } = useContext(
    NoteContext
  );

  return (
    <>
      <div className={classes.pane}>
        NOTES
        <FancyButton
          title="Add"
          onClick={() => {
            const newNote = addNote();
            selectNote(newNote);
            refreshNotes();
          }}
        />
      </div>
      <div className={classes.notes}>
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
