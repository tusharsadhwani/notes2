import { createContext } from "react";
import { addNote, updateNote, deleteNote } from "../utils/notes";

const NoteContext = createContext({
  noteId: "",
  setNoteId: (id) => {},
  title: "",
  setTitle: (title) => {},
  content: "",
  contentChange: (content) => {},
  selectNote: (note) => {},
  notes: [],
  setNotes: (notes) => {},
  HTML: "",
  addNote,
  updateNote,
  deleteNote,
});

export default NoteContext;
