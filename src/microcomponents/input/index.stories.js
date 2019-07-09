import React from 'react';
import { add, action, text, boolean } from 'stories';
import Input from './index';

const stories = [
  {
    name: 'with empty value',
    render: () => <Input value={text('Value', '')} />,
    notes: ''
  },
  {
    name: 'with value',
    render: () => <Input value={text('Value', 'Hello IB')} />,
    notes: ''
  },
  {
    name: 'with disabled',
    render: () => (
      <Input
        value={text('Value', 'Hello IB')}
        disabled={boolean('Disabled', true)}
      />
    ),
    notes: ''
  },
  {
    name: 'with auto focus',
    render: () => (
      <Input
        value={text('Value', 'Hello IB')}
        disabled={boolean('Disabled', false)}
        autoFocus={boolean('autoFocus', true)}
      />
    ),
    notes: ''
  },
  {
    name: 'with error',
    render: () => (
      <Input
        value={text('Value', 'Hello IB')}
        disabled={boolean('Disabled', false)}
        autoFocus={boolean('autoFocus', false)}
        error={text('Error', 'This field is require')}
      />
    ),
    notes: ''
  }
];

add('Input', stories);

export default stories;
