import React, { useState, useEffect} from "react";

function Console(props) {
    const [logOutput, setLogOutput] = useState([]);

    useEffect(() => {
        setLogOutput(logOutput => []);
        for (let singleLog of props.logs) {
            if (typeof singleLog === 'string' && singleLog.startsWith('Error: ')) {
                setLogOutput(logOutput => logOutput.concat(singleLog));
            }
            else {
                setLogOutput(logOutput => logOutput.concat(`> ${singleLog}`));
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
