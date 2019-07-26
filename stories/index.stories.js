import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CodeRunner from '../src/CodeRunner';
import Console from '../src/components/Console';
import ScriptEditor from '../src/components/ScriptEditor';

const js_01 = `let x = 42;
console.log(x);`;
const js_02 = `let x = 41;`;
const js_03 = `console.log('starting...');
let y = x+1;
console.log(y);
console.log('... finishing');
console.log('Terminated !!!');`;
const logs = ['starting...', '42', '... finishing', 'Terminated !!!'];

storiesOf('CodeRunner', module)
  .add('Code runner with explicit snippet', () => <CodeRunner snippet={js_01} />);

storiesOf('CodeRunner', module)
  .add('Code runner with hidden snippet', () => <CodeRunner hiddenSnippet={js_02}
  snippet={js_03} />);

storiesOf('ScriptEditor', module)
  .add('Code editor', () => <ScriptEditor code={js_01} ></ScriptEditor>);

storiesOf('Console', module)
  .add('Output logs', () => <Console logs={logs} />);
