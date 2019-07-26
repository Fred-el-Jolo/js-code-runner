import { useState } from 'react';

function useCustomLogger() {
  const [logs, setLogs] = useState([]);

  const originalConsoleLogger = console.log;
  const originalConsoleError = console.error;

  const initCustomConsole = () => {
    console.log = customLogger;
    console.error = customErrorLogger;
  };

  const resetCustomConsole = () => {
    console.log = originalConsoleLogger;
    console.error = originalConsoleError;
  };

  const customErrorLogger = function (...args) {
    setLogs(logArray => logArray.concat(`Error: ${args}`));
    // do not swallow console.error
    originalConsoleError.apply(console, args);
  };

  const customLogger = function (...args) {
    setLogs(logArray => logArray.concat(args));
    // do not swallow console.log
    originalConsoleLogger.apply(console, args);
  };

<<<<<<< HEAD
  const resetLogs = () => {
=======
  const clearLogs = () => {
>>>>>>> 3ed2e24399fa0a9f72ee62112d93579e21cfa6b4
    setLogs(logArray => []);
  };

  function runCode(fullCodeSnippet) {
<<<<<<< HEAD
    resetLogs();
=======
    clearLogs();
>>>>>>> 3ed2e24399fa0a9f72ee62112d93579e21cfa6b4
    initCustomConsole();
    try {
      // Create a new Function from the code, and immediately execute it.
      new Function(fullCodeSnippet)();
    } catch (event) {
        console.log('Error: ' + event.message);
    }
    resetCustomConsole();
  }

<<<<<<< HEAD
  return [logs, resetLogs, runCode];
=======
  return [logs, clearLogs, runCode];
>>>>>>> 3ed2e24399fa0a9f72ee62112d93579e21cfa6b4
}

export default useCustomLogger;