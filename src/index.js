import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeRunner from "./CodeRunner";
import ScriptTemplate from "./components/ScriptTemplate";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<CodeRunner >
    <ScriptTemplate hidden="true">
        let x = 2;
    </ScriptTemplate>
    <ScriptTemplate>
        let y = x+1;
        console.log(y);
    </ScriptTemplate>
</CodeRunner>
, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
