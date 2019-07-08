import React, { useEffect } from "react";

function ScriptTemplate(props) {
  
  useEffect(() => {
    console.log(`JS code : ${props.children}`);
  }, [props.children]);

  return (
    <div>
      <template>
        {props.children}
      </template>
    </div>
  );
}

export default ScriptTemplate;
