import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./codeRunner.scss";
import ScriptEditor from "./components/ScriptEditor";
import Console from "./components/Console";
import useCustomLogger from "./hooks/useCustomLogger"
import * as devLogger from 'loglevel';
devLogger.setLevel(devLogger.levels.DEBUG);

/**
 * CodeRunner component
 * 
 * @param {any} props:
 *  - snippet: the code snippet displayed
 *  - hiddenSnippet: hidden code snippet executed before the snippet code
 *  - title: title displayed over the component
 */
function CodeRunner({snippet, hiddenSnippet, title}) {
  const [fullScreen, setFullScreen] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState(snippet);
  const [hiddenCodeSnippet] = useState(hiddenSnippet);
  const [fullCodeSnippet, setFullCodeSnippet] = useState("");
  const [logs, clearLogs, runCodeWithCustomLogger] = useCustomLogger();

  /**
   * Toggle full screen on this component
   */
  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  /**
   * Update the code snippet
   * @param {any} newCode - The new code snippet
   */
  const changeCodeSnippet = (newCode) => {
    devLogger.debug(`New code snippet : ${newCode}`);
    setCodeSnippet(newCode);
  }

  /**
   * Run the code snippet and track the logs into the specific console output
   */
  const runCode = () => {
    runCodeWithCustomLogger(fullCodeSnippet);
  };

  /**
   * Reset the code snippet to the initial value and clear the console output
   */
  const reset = () => {
    devLogger.info('Reset !!!');
    setCodeSnippet(snippet);
    clearLogs();
  };

  /**
   * Sets the fullCodeSnippet state property when the code snippet and/or the hidden code
   * snippet are updated
   */
  useEffect(() => {
    const concatSnippet = `${hiddenCodeSnippet == null ? '' : hiddenCodeSnippet};${codeSnippet == null ? '' : codeSnippet}`;
    setFullCodeSnippet(concatSnippet);
  }, [codeSnippet, hiddenCodeSnippet]);

  // Render component
  return (
    <section className={`CodeRunner ${fullScreen ? 'CodeRunner_fullscreen' : ''}`}>
      <h4 className="CodeRunner-Title">
        {title}
      </h4>
      <div className="CodeRunner-EditorWrapper">
        <div className="CodeRunner-FullTextButton">
          <span role="button" onClick={() => toggleFullScreen()}>
            <FontAwesomeIcon icon="expand-arrows-alt" />
          </span>
        </div>
        <ScriptEditor className="CodeRunner-ScriptEditor" code={codeSnippet} onCodeChange={changeCodeSnippet}></ScriptEditor>
      </div>
      <br />
      <button onClick={() => runCode()}>Run</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
      <Console logs={logs} />
    </section>
  );
}

export default CodeRunner;
