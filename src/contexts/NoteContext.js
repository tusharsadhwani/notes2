import { createContext } from "react";

const NoteContext = createContext({
  title: "",
  body: "",
});

export default NoteContext;
