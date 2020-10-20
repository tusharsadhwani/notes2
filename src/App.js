import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import prettier from "prettier";
import prettierMarkdown from "prettier/parser-markdown";

const App = () => {
  const editorRef = useRef();
  const previewRef = useRef();

  const parse = () => {
    const formattedCode = prettier.format(code, {
      parser: "markdown",
      plugins: [prettierMarkdown],
    });

    setCode(formattedCode);
  };

  const [code, setCode] = useState("");

  return (
    <div className="App">
      <textarea
        onChange={(e) => setCode(e.target.value)}
        value={code}
      ></textarea>
      <div ref={previewRef}></div>
      <button onClick={parse}>Prettify</button>
    </div>
  );
};

export default App;
