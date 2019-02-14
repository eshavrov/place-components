import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button class="my-class" onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="b1">
        😀
      </span>
      <span role="img" aria-label="b2">
        😎
      </span>
      <span role="img" aria-label="b3">
        👍
      </span>
      <span role="img" aria-label="b4">
        💯
      </span>
    </Button>
  ));
