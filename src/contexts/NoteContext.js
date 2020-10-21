import { createContext } from "react";
import {
  getNotes,
  setNotes,
  addNote,
  updateNote,
  deleteNote,
} from "../utils/notes";

const NoteContext = createContext({
  selectedNote: -1,
  setSelectedNote: () => {},
  getNotes,
  setNotes,
  addNote,
  updateNote,
  deleteNote,
});

export default NoteContext;
