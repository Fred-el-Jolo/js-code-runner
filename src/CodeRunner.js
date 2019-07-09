import React from "react";

function CodeRunner(props) {
  // const codeArray = ((children) => {
  //   if (Array.isArray(children)) {
  //     return children.map((value) => {
  //       return value.props.children
  //     });
  //   }
  //   else {
  //     return [children.props.children];
  //   }
  // })(props.children);
  
  return (
    <div>
      {props.children}
      <button onClick={() => console.log('Run action todo')}>Run</button>
      <button onClick={() => console.log('Reset action todo')}>Reset</button>
    </div>
  );
}

export default CodeRunner;
