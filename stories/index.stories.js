import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CodeRunner from '../src/CodeRunner';

storiesOf('CodeRunner', module)
  .add('Standard code runner', () => <CodeRunner />);
