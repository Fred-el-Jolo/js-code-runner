import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeRunner from "./CodeRunner";
import ScriptEditor from "./components/ScriptEditor";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<CodeRunner >
    <ScriptEditor hidden="true">
{
`let y = x+1;`
}
    </ScriptEditor>
    <ScriptEditor>
{
`let y = x+1;
console.log(y);`
}
    </ScriptEditor>
</CodeRunner>
, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
