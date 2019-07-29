import React, { useState, useEffect} from "react";
import formatOutput from "../lib/console-utils";

function Console(props) {
    const [logOutput, setLogOutput] = useState([]);

    useEffect(() => {
        setLogOutput(logOutput => []);
        for (let singleLog of props.logs) {
            if (typeof singleLog === 'string' && singleLog.startsWith('Error: ')) {
                setLogOutput(logOutput => logOutput.concat(formatOutput(singleLog)));
            }
            else {
                setLogOutput(logOutput => logOutput.concat(`> ${formatOutput(singleLog)}`));
            }
        }
    }, [props.logs]);

    return (
        <div className="output">
            <code>{logOutput.join('\n')}</code>
        </div>
    );
}

export default Console;
