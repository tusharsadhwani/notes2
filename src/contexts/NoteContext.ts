import { createContext } from "react";
import { addNote, updateNote, deleteNote } from "../utils/notes";

const NoteContext = createContext({
  noteId: "",
  setNoteId: (id: string) => {},
  title: "",
  setTitle: (title: string) => {},
  content: "",
  contentChange: (content: string) => {},
  selectNote: (note: Note) => {},
  notes: undefined as Note[] | undefined,
  refreshNotes: () => {},
  HTML: "",
  addNote,
  updateNote,
  deleteNote,
});

export default NoteContext;
