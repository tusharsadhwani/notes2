import rehypePrism from "@mapbox/rehype-prism";
import prettier from "prettier";
import prettierMarkdown from "prettier/parser-markdown";
import React, { useEffect, useState } from "react";
import stringify from "rehype-stringify";
import remark from "remark-parse";
import remark2rehype from "remark-rehype";
import unified from "unified";

import Editor from "./components/Editor";
import Header from "./components/Header";
import Preview from "./components/Preview";
import NoteContext from "./contexts/NoteContext";
import { getNotes, addNote, updateNote, deleteNote } from "./utils/notes";
import Title from "./components/Title";

import "./App.css";
import "./shades-of-purple.css";

const App = () => {
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
          setHTML(html.contents);
        }
      });
  };

  const contentChange = (newContent) => {
    setContent(newContent);
    preview(newContent);
  };

  const [notes, _setNotes] = useState([]);
  const [noteId, setNoteId] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [HTML, setHTML] = useState("");
  const selectNote = (newNote) => {
    setNoteId(newNote.id);
    setTitle(newNote.title);
    contentChange(newNote.content);
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
    contentChange,
    HTML,
  };

  return (
    <NoteContext.Provider value={noteContext}>
      <div className="App">
        <Header />
        <div className="mainWrapper">
          <Title prettify={prettify} />
          <main style={{ display: "flex", height: "100%" }}>
            <Editor
              onChange={(e) => contentChange(e.target.value)}
              value={content}
              prettify={prettify}
            />
            <Preview />
          </main>
        </div>
      </div>
    </NoteContext.Provider>
  );
};

export default App;
