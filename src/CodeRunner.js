import React, {useState, useEffect} from "react";
import "./code-runner.css";
import ScriptEditor from "./components/ScriptEditor";
import Console from "./components/Console";
import useCustomLogger from "./hooks/useCustomLogger"

function CodeRunner(props) {
  const [codeSnippet, setCodeSnippet] = useState(props.snippet);
  const [hiddenCodeSnippet] = useState(props.hiddenSnippet);
  const [fullCodeSnippet, setFullCodeSnippet] = useState("");

  const [logs, runCodeWithCustomLogger] = useCustomLogger();

  const changeCodeSnippet = (newCode) => {
    console.log(`New code snippet : ${newCode}`);
    setCodeSnippet(newCode);
  }

  const runCode = () => {
    runCodeWithCustomLogger(fullCodeSnippet);
  };

  const reset = () => {
    console.log('Reset !!!!');
    setCodeSnippet(props.snippet);
  };

  useEffect(() => {
    const concatSnippet = `${hiddenCodeSnippet == null ? '' : hiddenCodeSnippet};${codeSnippet == null ? '' : codeSnippet}`;
    setFullCodeSnippet(concatSnippet);
  }, [codeSnippet, hiddenCodeSnippet]);

  return (
    <div>
      <ScriptEditor code={codeSnippet} onCodeChange={changeCodeSnippet}></ScriptEditor>
      <br />
      <button onClick={() => runCode()}>Run</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
      <Console logs={logs} />
    </div>
  );
}

export default CodeRunner;
