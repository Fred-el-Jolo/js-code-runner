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

  const clearLogs = () => {
    setLogs(logArray => []);
  };

  function runCode(fullCodeSnippet) {
    clearLogs();
    initCustomConsole();
    try {
      // Create a new Function from the code, and immediately execute it.
      new Function(fullCodeSnippet)();
    } catch (event) {
        console.log('Error: ' + event.message);
    }
    resetCustomConsole();
  }

  return [logs, clearLogs, runCode];
}

export default useCustomLogger;