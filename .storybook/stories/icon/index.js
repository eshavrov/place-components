import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../../../components/icon/src/index';

storiesOf('Icon', module)
  .add('color', () => <Icon name="round-call-24px" fill="red" />)
  .add('size', () => <Icon name="round-call-24px" size={64} />);
