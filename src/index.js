import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeRunner from "./CodeRunner";
import * as serviceWorker from './serviceWorker';

const js_01 = `const asyncExec = (callback, data) => {
    setTimeout(() => callback(null, data), 0);
};
const api = {
    getUser: (login, callback) => asyncExec(callback, 'Hi' + login + ', you are logged in.'),
    getGeoLocation: (user, callback) => asyncExec(callback, user + ' You live in Nice.'),
    getWeather: (location, callback) => asyncExec(callback, location + ' It is sunny.'),
    notifyWeather: (data, callback) => asyncExec(callback, 'Notified: ' + data),
}

api.getUser('fred', function(err, user) {
    api.getGeoLocation(user, function(err, location) {
        api.getWeather(location, function(err, weather) {
            api.notifyWeather(weather, function(err, data) {
                console.log(data);
            });
        });
    });
});
`;
const js_02 = `console.log('42');`;


ReactDOM.render(
<div>
    <CodeRunner title="JS test number 01"
        snippet={js_02}>
    </CodeRunner>
    <CodeRunner title="JS test number 01"
        snippet={js_01}>
    </CodeRunner>
</div>
, document.getElementById("root"));

//setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById("root"))}, 10000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
