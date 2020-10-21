import rehypePrism from "@mapbox/rehype-prism";
import prettier from "prettier";
import prettierMarkdown from "prettier/parser-markdown";
import React, { useRef, useState } from "react";
import stringify from "rehype-stringify";
import remark from "remark-parse";
import remark2rehype from "remark-rehype";
import unified from "unified";

import Editor from "./components/Editor";
import Header from "./components/Header";
import Preview from "./components/Preview";
import NoteContext from "./contexts/NoteContext";
import {
  getNotes,
  setNotes,
  addNote,
  updateNote,
  deleteNote,
} from "./utils/notes";

import "./App.css";
import "./vs-light.css";

const App = () => {
  const previewRef = useRef();

  const prettify = () => {
    const formattedCode = prettier.format(code, {
      parser: "markdown",
      plugins: [prettierMarkdown],
    });

    setCode(formattedCode);
  };

  const preview = (code) => {
    unified()
      .use(remark)
      .use(remark2rehype)
      .use(rehypePrism)
      .use(stringify)
      .process(code, (err, html) => {
        if (!err) {
          previewRef.current.innerHTML = String(html);
        }
      });
  };

  const [code, setCode] = useState("");

  const handleChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
    preview(newCode);
  };

  const [selectedNote, setSelectedNote] = useState();
  const noteContext = {
    selectedNote,
    setSelectedNote,
    getNotes,
    setNotes,
    addNote,
    updateNote,
    deleteNote,
  };

  return (
    <NoteContext.Provider value={noteContext}>
      <div className="App">
        <Header />
        <div className="mainWrapper">
          <h1>{selectedNote?.title ?? "untitled"}</h1>
          <main>
            <Editor onChange={handleChange} value={code} prettify={prettify} />
            <Preview ref={previewRef} />
          </main>
        </div>
      </div>
    </NoteContext.Provider>
  );
};

export default App;
