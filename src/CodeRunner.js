import React, {useState, useEffect} from "react";
import "./codeRunner.scss";
import ScriptEditor from "./components/ScriptEditor";
import Console from "./components/Console";
import useCustomLogger from "./hooks/useCustomLogger"
import * as devLogger from 'loglevel';
devLogger.setLevel(devLogger.levels.DEBUG);

function CodeRunner(props) {
  const [fullScreen, setFullScreen] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState(props.snippet);
  const [hiddenCodeSnippet] = useState(props.hiddenSnippet);
  const [fullCodeSnippet, setFullCodeSnippet] = useState("");
  const [logs, clearLogs, runCodeWithCustomLogger] = useCustomLogger();

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  const changeCodeSnippet = (newCode) => {
    devLogger.debug(`New code snippet : ${newCode}`);
    setCodeSnippet(newCode);
  }

  const runCode = () => {
    runCodeWithCustomLogger(fullCodeSnippet);
  };

  const reset = () => {
    devLogger.info('Reset !!!');
    setCodeSnippet(props.snippet);
    clearLogs();
  };

  useEffect(() => {
    const concatSnippet = `${hiddenCodeSnippet == null ? '' : hiddenCodeSnippet};${codeSnippet == null ? '' : codeSnippet}`;
    setFullCodeSnippet(concatSnippet);
  }, [codeSnippet, hiddenCodeSnippet]);

  return (
    <section className={`CodeRunner ${fullScreen ? 'CodeRunner_fullscreen' : ''}`}>
      <h4 className="CodeRunner-Title">{props.title}</h4>
      <ScriptEditor className="CodeRunner-ScriptEditor" code={codeSnippet} onCodeChange={changeCodeSnippet}></ScriptEditor>
      <button onClick={() => toggleFullScreen()}>Full screen</button>
      <br />
      <button onClick={() => runCode()}>Run</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
      <Console logs={logs} />
    </section>
  );
}

export default CodeRunner;
