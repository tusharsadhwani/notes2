import React, { useEffect, useState } from "react";
import FancyButton from "./FancyButton";

const getNotes = () => {
  const notesJSON = localStorage.notes;
  if (notesJSON) return JSON.parse(notesJSON);
  else return [];
};

const setNotes = (notes) => {
  localStorage.notes = JSON.stringify(notes);
};

const addNote = (title, content) => {
  const notes = getNotes();
  notes.push({ title, content });
  setNotes(notes);
};

const updateNote = (index, title, content) => {
  const notes = getNotes();
  notes[index] = { title, content };
  setNotes(notes);
};

const deleteNote = (index) => {
  const notes = getNotes();
  notes.splice(index, 1);
  setNotes(notes);
};

const NoteListItem = ({ note }) => (
  <div style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
    {note.title}
  </div>
);

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  useEffect(() => {
    setNoteList(getNotes());
  }, []);

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
        <FancyButton title="Add" />
      </div>
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {noteList.map((note) => (
          <NoteListItem note={note} />
        ))}
      </div>
    </>
  );
};

export default NoteList;
