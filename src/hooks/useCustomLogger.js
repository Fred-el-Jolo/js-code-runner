import { useState, useEffect } from 'react';

function useCustomLogger() {
  const [logs, setLogs] = useState([]);
  const [originalConsole, setOriginalConsole] = useState({});

  useEffect(() => {
    console.info('Init');
    setOriginalConsole(obj => {
      obj.log = console.log;
      obj.error = console.error;
      return obj;
    });
    return function cleanup() {
      console.info('Cleanup');
      console.log = originalConsole.log;
      console.error = originalConsole.error;
    }
  }, []);

  const attachCustomConsole = () => {
    console.log = customLogger;
    console.error = customErrorLogger;
  };

  const customErrorLogger = function (...args) {
    setLogs(logArray => logArray.concat(`Error: ${args}`));
    // do not swallow console.error
    originalConsole.error.apply(console, args);
  };

  const customLogger = function (...args) {
    setLogs(logArray => logArray.concat(args));
    // do not swallow console.log
    originalConsole.log.apply(console, args);
  };

  const clearLogs = function () {
    setLogs(logArray => []);
  };

  function runCode(fullCodeSnippet) {
    clearLogs();
    attachCustomConsole();
    try {
      // Create a new Function from the code, and immediately execute it.
      new Function(fullCodeSnippet)();
    } catch (event) {
        console.log('Error: ' + event.message);
    }
  }

  return [logs, clearLogs, runCode];
}

export default useCustomLogger;