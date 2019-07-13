import React, {useState, useEffect} from "react";
import ScriptEditor from "./components/ScriptEditor";
import {initConsole, resetConsole} from "./lib/console-utils";

function CodeRunner(props) {
  const [codeSnippet, setCodeSnippet] = useState(props.snippet);
  const [hiddenCodeSnippet] = useState(props.hiddenSnippet);
  const [fullCodeSnippet, setFullCodeSnippet] = useState("");

  const changeCodeSnippet = (newCode) => {
    console.log(`New code snippet : ${newCode}`);
    setCodeSnippet(newCode);
  }

  useEffect(() => {
    const concatSnippet = `${hiddenCodeSnippet == null ? '' : hiddenCodeSnippet};${codeSnippet == null ? '' : codeSnippet}`;
    setFullCodeSnippet(concatSnippet);
  }, [codeSnippet, hiddenCodeSnippet]);

  const runCode = () => {
    initConsole();
    try {
      // Create a new Function from the code, and immediately execute it.
      new Function(fullCodeSnippet)();
    } catch (event) {
        console.log('Error: ' + event.message);
    }
    resetConsole();
  };

  const reset = () => {
    console.log('Reset !!!!');
    setCodeSnippet(props.snippet);
  };

  return (
    <div>
      <ScriptEditor code={codeSnippet} onCodeChange={changeCodeSnippet}></ScriptEditor>
      <br />
      <button onClick={() => runCode()}>Run</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
      <div id="console"><code></code></div>
    </div>
  );
}

export default CodeRunner;
