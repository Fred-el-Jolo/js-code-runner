import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeRunner from "./CodeRunner";
import * as serviceWorker from './serviceWorker';

const js_01 = `let x = 41;`;
const js_02 = `console.log('starting...');
let y = x+1;
console.log(y);
console.log('... finishing');
console.log('Terminated !!!');`;

ReactDOM.render(
<CodeRunner hiddenSnippet={js_01}
    snippet={js_02}>
</CodeRunner>
, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
