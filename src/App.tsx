import prettier from "prettier";
import prettierMarkdown from "prettier/parser-markdown";
import React, { useEffect, useState } from "react";
import stringify from "rehype-stringify";
import remark from "remark-parse";
import remark2rehype from "remark-rehype";
import unified from "unified";

//@ts-ignore
import rehypePrism from "@mapbox/rehype-prism";

import Editor from "./components/Editor";
import Header from "./components/Header";
import Preview from "./components/Preview";
import NoteContext from "./contexts/NoteContext";
import Title from "./components/Title";
import { getNotes, addNote, updateNote, deleteNote } from "./utils/notes";

import "./App.css";
import "./shades-of-purple.css";
import { debounce } from "./utils/debounce";

const App = () => {
  const prettify = () => {
    const formattedContent = prettier.format(content, {
      parser: "markdown",
      plugins: [prettierMarkdown],
    });

    setContent(formattedContent);
    debounce("update content", () => {
      updateNote(noteId, title, formattedContent);
    });
  };

  const preview = (markdown: string) => {
    unified()
      .use(remark)
      .use(remark2rehype)
      .use(rehypePrism)
      .use(stringify)
      .process(markdown, (err, html) => {
        if (!err) {
          setHTML(html.contents.toString());
        }
      });
  };

  const contentChange = (newContent: string) => {
    setContent(newContent);
    preview(newContent);
  };

  const [notes, _setNotes] = useState<Note[]>();
  const [noteId, setNoteId] = useState<string>("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [HTML, setHTML] = useState("");
  const selectNote = (newNote: Note) => {
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
            <Editor value={content} prettify={prettify} />
            <Preview />
          </main>
        </div>
      </div>
    </NoteContext.Provider>
  );
};

export default App;
