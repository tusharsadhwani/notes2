import { v4 } from "uuid";

export const getNotes = (): Note[] => {
  const notesJSON = localStorage.notes;
  if (notesJSON) return JSON.parse(notesJSON);
  else return [];
};

export const setNotes = (notes: Note[]) => {
  localStorage.notes = JSON.stringify(notes);
};

export const addNote = (title = "", content = "") => {
  const notes = getNotes();
  const newNote = { id: v4(), title, content };
  notes.push(newNote);
  setNotes(notes);
  return newNote;
};

export const updateNote = (id: string, title: string, content: string) => {
  const notes = getNotes();
  const noteIndex = notes.findIndex((note) => note.id === id);
  notes[noteIndex].title = title;
  notes[noteIndex].content = content;
  setNotes(notes);
};

export const deleteNote = (id: string) => {
  const notes = getNotes();
  const noteIndex = notes.findIndex((note) => note.id === id);
  notes.splice(noteIndex, 1);
  setNotes(notes);
};
