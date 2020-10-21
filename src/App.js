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

  return (
    <div className="App">
      <Header />
      <Editor onChange={handleChange} value={code} prettify={prettify} />
      <Preview ref={previewRef} />
    </div>
  );
};

export default App;
