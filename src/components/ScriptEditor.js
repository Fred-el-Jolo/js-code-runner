import React, { useState, useEffect, useRef } from "react";
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

function ScriptEditor(props) {
  const [code] = useState(props.code);
  const containerEl = useRef(null);
  
  useEffect(() => {
    // Create a new CodeMirror instance
    const codeMirrorInstance = CodeMirror(containerEl.current, {
      mode: "javascript",
      value: code,
      theme: "material",
      lineWrapping: true,
      lineNumbers: true,
    });

    // Register the change event and dispatch it to the parent
    codeMirrorInstance.on('change', (instance) => {props.onCodeChange(instance.getValue())});
  });

  return (
    <div ref={containerEl}>
    </div>
  );
}

export default ScriptEditor;
