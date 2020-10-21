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
  notes.push({ title, content });
  setNotes(notes);
};

export const updateNote = (index, title, content) => {
  const notes = getNotes();
  notes[index] = { title, content };
  setNotes(notes);
};

export const deleteNote = (index) => {
  const notes = getNotes();
  notes.splice(index, 1);
  setNotes(notes);
};
