import React, { useState, useEffect, useRef } from "react";
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

function ScriptEditor(props) {
  const [code, setCode] = useState(props.children);
  const containerEl = useRef(null);

  useEffect(() => {
    if (!props.hidden) {
      CodeMirror(containerEl.current, {
        mode: "javascript",
        value: code,
        theme: "material",
        lineWrapping: true,
        lineNumbers: true,
      });
    }
  });

  return (
    <div ref={containerEl}>
    </div>
  );
}

export default ScriptEditor;
