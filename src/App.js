import React, { useRef, useState } from "react";
import Header from "./components/Header"
import Preview from "./components/Preview"
import Editor from "./components/Editor"
import FancyButton from "./components/FancyButton"

import prettier from "prettier";
import prettierMarkdown from "prettier/parser-markdown";
import unified from "unified";
import remark from "remark-parse";
import remark2rehype from "remark-rehype";
import stringify from "rehype-stringify";

const App = () => {
  const previewRef = useRef();

  const parse = () => {
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
      <Header/>
      <Editor onChange = {handleChange} value={code}/>
      <Preview ref={previewRef}/>
      <FancyButton onClick={parse}/>
    </div>
  );
};

export default App;
