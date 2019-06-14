import React, { useState, useEffect } from "react";

function CodeRunner(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('Time to try the stuff !!!');
    console.dir(props.children);
  });

  return (
    <div>
      {props.children}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CodeRunner;
