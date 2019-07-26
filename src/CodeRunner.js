import React, {useState, useEffect} from "react";
import "./code-runner.css";
import ScriptEditor from "./components/ScriptEditor";
import Console from "./components/Console";
import useCustomLogger from "./hooks/useCustomLogger"

function CodeRunner(props) {
  const [codeSnippet, setCodeSnippet] = useState(props.snippet);
  const [hiddenCodeSnippet] = useState(props.hiddenSnippet);
  const [fullCodeSnippet, setFullCodeSnippet] = useState("");
<<<<<<< HEAD

  const [logs, resetLogs, runCodeWithCustomLogger] = useCustomLogger();
=======
  const [logs, clearLogs, runCodeWithCustomLogger] = useCustomLogger();
>>>>>>> 3ed2e24399fa0a9f72ee62112d93579e21cfa6b4

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
<<<<<<< HEAD
    resetLogs();
=======
    clearLogs();
>>>>>>> 3ed2e24399fa0a9f72ee62112d93579e21cfa6b4
  };

  useEffect(() => {
    const concatSnippet = `${hiddenCodeSnippet == null ? '' : hiddenCodeSnippet};${codeSnippet == null ? '' : codeSnippet}`;
    setFullCodeSnippet(concatSnippet);
  }, [codeSnippet, hiddenCodeSnippet]);

  return (
    <section>
<<<<<<< HEAD
=======
      <header>
        <h4>{props.title}</h4>
      </header>
>>>>>>> 3ed2e24399fa0a9f72ee62112d93579e21cfa6b4
      <ScriptEditor code={codeSnippet} onCodeChange={changeCodeSnippet}></ScriptEditor>
      <br />
      <button onClick={() => runCode()}>Run</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
      <Console logs={logs} />
    </section>
  );
}

export default CodeRunner;
