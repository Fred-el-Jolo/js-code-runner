import React, { useState, useEffect } from "react";

function ScriptEditor(props) {
  
  const [code, setCode] = useState(props.children);

  useEffect(() => {
    console.log(`JS code : ${code}`);
  }, [code]);

  return (
    <textarea onChange={(event) => console.log(event.target.value)}>
      {code}
    </textarea>
  );
}

export default ScriptEditor;
