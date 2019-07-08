import React, { useState, useEffect } from "react";

function CodeRunner(props) {
  const codeArray = ((children) => {
    if (Array.isArray(children)) {
      return children.map((value) => {
        return value.props.children
      });
    }
    else {
      return [children.props.children];
    }
  })(props.children);

  console.dir(codeArray);
  
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });
  
  return (
    <div>
      {props.children}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Run</button>
      <button onClick={() => setCount(count + 1)}>Reset</button>
    </div>
  );
}

export default CodeRunner;
