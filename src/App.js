import rehypePrism from "@mapbox/rehype-prism";
import prettier from "prettier";
import prettierMarkdown from "prettier/parser-markdown";
import React, { useEffect, useRef, useState } from "react";
import stringify from "rehype-stringify";
import remark from "remark-parse";
import remark2rehype from "remark-rehype";
import unified from "unified";

import Editor from "./components/Editor";
import Header from "./components/Header";
import Preview from "./components/Preview";
import NoteContext from "./contexts/NoteContext";
import { getNotes, addNote, updateNote, deleteNote } from "./utils/notes";

import "./App.css";
import "./vs-light.css";

const App = () => {
  const previewRef = useRef();

  const prettify = () => {
    const formattedCode = prettier.format(content, {
      parser: "markdown",
      plugins: [prettierMarkdown],
    });

    setContent(formattedCode);
  };

  const preview = (markdown) => {
    unified()
      .use(remark)
      .use(remark2rehype)
      .use(rehypePrism)
      .use(stringify)
      .process(markdown, (err, html) => {
        if (!err) {
          previewRef.current.innerHTML = String(html);
        }
      });
  };

  const handleChange = (event) => {
    const newContent = event.target.value;
    setContent(newContent);
    preview(newContent);
  };

  const [notes, _setNotes] = useState([]);
  const [noteId, setNoteId] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const selectNote = (newNote) => {
    setNoteId(newNote.id);
    setTitle(newNote.title);
    setContent(newNote.content);
  };

  const refreshNotes = () => {
    _setNotes(getNotes());
  };
  useEffect(() => {
    refreshNotes();
  }, []);

  const noteContext = {
    noteId,
    setNoteId,
    title,
    setTitle,
    content,
    setContent,
    selectNote,
    notes,
    refreshNotes,
    addNote,
    updateNote,
    deleteNote,
  };

  return (
    <NoteContext.Provider value={noteContext}>
      <div className="App">
        <Header />
        <div className="mainWrapper">
          <h1>{title || "untitled"}</h1>
          <main>
            <Editor
              onChange={handleChange}
              value={content}
              prettify={prettify}
            />
            <Preview ref={previewRef} />
          </main>
        </div>
      </div>
    </NoteContext.Provider>
  );
};

export default App;
