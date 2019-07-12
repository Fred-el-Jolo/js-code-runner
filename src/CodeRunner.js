import React, {useState} from "react";
import ScriptEditor from "./components/ScriptEditor";

function CodeRunner(props) {
  const [codeSnippet, setCodeSnippet] = useState(props.snippet);
  const [hiddenCodeSnippet] = useState(props.hiddenSnippet);

  const changeCodeSnippet = (newCode) => {
    console.log(`New code snippet : ${newCode}`);
    setCodeSnippet(newCode);
  }

  return (
    <div>
      <ScriptEditor code={codeSnippet} onCodeChange={changeCodeSnippet}></ScriptEditor>
      <br />
      <button onClick={() => console.log('Run action todo')}>Run</button>
      <button onClick={() => console.log('Reset action todo')}>Reset</button>
    </div>
  );
}

export default CodeRunner;
