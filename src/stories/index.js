import { storiesOf } from '@storybook/react';
import { action as addOnAction } from '@storybook/addon-actions';
import {
  withKnobs,
  text as typeText,
  boolean as typeBoolean,
  number as typeNumber
} from '@storybook/addon-knobs';

export const add = (name, stories) => {
  const of = storiesOf(name, module);
  of.addDecorator(withKnobs);
  stories.forEach(story =>
    of.add(story.name, story.render, { notes: story.notes })
  );
};

export const action = addOnAction;
export const text = typeText;
export const boolean = typeBoolean;
export const number = typeNumber;
