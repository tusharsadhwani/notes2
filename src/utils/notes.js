import { v4 } from "uuid";

export const getNotes = () => {
  const notesJSON = localStorage.notes;
  if (notesJSON) return JSON.parse(notesJSON);
  else return [];
};

export const setNotes = (notes) => {
  localStorage.notes = JSON.stringify(notes);
};

export const addNote = (title, content) => {
  const notes = getNotes();
  notes.push({ id: v4(), title, content });
  setNotes(notes);
};

export const updateNote = (id, title, content) => {
  const notes = getNotes();
  const noteIndex = notes.findIndex((note) => note.id === id);
  notes[noteIndex].title = title;
  notes[noteIndex].content = content;
  setNotes(notes);
};

export const deleteNote = (id) => {
  const notes = getNotes();
  const noteIndex = notes.findIndex((note) => note.id === id);
  notes.splice(noteIndex, 1);
  setNotes(notes);
};
