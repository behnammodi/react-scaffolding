import React from 'react';
import { add, action, text, boolean } from 'stories';
import Button from './index';

const stories = [
  {
    name: 'with text',
    render: () => <Button>{text('children', 'Hello IB')}</Button>,
    notes: ''
  },
  {
    name: 'with disabled',
    render: () => (
      <Button disabled={boolean('disabled', true)}>
        {text('children', 'Hello IB')}
      </Button>
    ),
    notes: ''
  },
  {
    name: 'with action',
    render: () => (
      <Button onClick={action('clicked')} disabled={boolean('disabled', false)}>
        {text('children', 'Hello IB')}
      </Button>
    ),
    notes: 'You can click on button and seeing log in action panel'
  }
];

add('Button', stories);

export default stories;
