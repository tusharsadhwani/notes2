import React, { useCallback, useContext, useEffect, useState } from "react";
import NoteContext from "../contexts/NoteContext";
import FancyButton from "./FancyButton";
import { NoteListItem } from "./NoteListItem";
import classes from "./NoteList.module.css";

const NoteList = () => {
  const { notes, addNote, refreshNotes, selectNote, noteId } = useContext(
    NoteContext
  );

  const addNewNote = useCallback(() => {
    const newNote = addNote();
    selectNote(newNote);
    refreshNotes();
  }, [addNote, refreshNotes, selectNote]);

  const [defaultNoteSelected, setDefaultNoteSelected] = useState(false);

  useEffect(() => {
    if (notes) {
      if (notes.length === 0) {
        addNewNote();
      }
      if (!defaultNoteSelected) {
        if (notes[0]) selectNote(notes[0]);
        setDefaultNoteSelected(true);
      }
    }
  }, [notes, defaultNoteSelected, addNewNote, selectNote]);

  return (
    <>
      <div className={classes.pane}>
        notes
        <FancyButton
          title="Add"
          onClick={() => {
            addNewNote();
          }}
        />
      </div>
      <div className={classes.notes}>
        {notes
          ? notes.map((note, index) => {
              const isSelected = note.id === noteId;

              return (
                <NoteListItem
                  key={note.id}
                  note={note}
                  selected={isSelected}
                  onClick={() => selectNote(notes[index])}
                />
              );
            })
          : null}
      </div>
    </>
  );
};

export default NoteList;
