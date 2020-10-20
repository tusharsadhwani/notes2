import React, { useRef, useState } from "react";
import "./App.css";

import prettier from "prettier";
import prettierMarkdown from "prettier/parser-markdown";

var remark = require("remark");
var recommended = require("remark-preset-lint-recommended");
var html = require("remark-html");

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
    remark()
      .use(recommended)
      .use(html)
      .process(code, function (err, file) {
        if (!err) {
          const html = String(file);
          previewRef.current.innerHTML = html;
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
      <textarea onChange={handleChange} value={code}></textarea>
      <div ref={previewRef}></div>
      <button onClick={parse}>Prettify</button>
    </div>
  );
};

export default App;
