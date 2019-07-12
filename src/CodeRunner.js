import React from "react";

function CodeRunner(props) {
  return (
    <div>
      {props.children}
      <br />
      <button onClick={() => console.log('Run action todo')}>Run</button>
      <button onClick={() => console.log('Reset action todo')}>Reset</button>
    </div>
  );
}

export default CodeRunner;
