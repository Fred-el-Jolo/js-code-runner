import React, { useState, useEffect, useRef } from "react";
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

function ScriptEditor(props) {
  const [codeMirrorInstance, setCodeMirrorInstance] = useState(null);
  const containerEl = useRef(null);

  useEffect(() => {
    console.log('Init code mirror instance');
    // Create a new CodeMirror instance
    setCodeMirrorInstance(CodeMirror(containerEl.current, {
      mode: "javascript",
      value: props.code,
      theme: "default",
      lineWrapping: true,
      lineNumbers: true,
    }));
  }, []);

  useEffect(() => {
    // Register the change event and dispatch it to the parent
    if (codeMirrorInstance != null) {
      codeMirrorInstance.on('change', (instance) => props.onCodeChange(instance.getValue()) );
    }
  }, [codeMirrorInstance]);

  useEffect(() => {
    if (codeMirrorInstance != null && codeMirrorInstance.getValue() !== props.code) {
      console.log('Updating code mirror instance');
      codeMirrorInstance.setValue(props.code);
    }
  }, [props.code]);

  return (
    <div className={props.className ? props.className : ''} ref={containerEl}>
    </div>
  );
}

export default ScriptEditor;
