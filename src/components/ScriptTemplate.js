import React, { useState, useEffect } from "react";

function ScriptTemplate(props) {
  // Declare a new state variable, which we'll call "count"
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    console.log('JS detected !!! :' + props.children);
  });

  return (
    <template>
      {props.children}
    </template>
  );
}

export default ScriptTemplate;
