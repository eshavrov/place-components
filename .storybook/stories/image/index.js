import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../../../components/image';

const MOCK_URL_IMAGE = 'http://localhost:4321/rooms/0.jpg';

storiesOf('Image', module)
  .add('default', () => (
    <div
      style={{
        width: '400px',
        height: '300px',
      }}
    >
      <Image src={MOCK_URL_IMAGE} />
    </div>
  ))
  .add('width', () => (
    <div
      style={{
        width: '400px',
        height: '300px',
      }}
    >
      <Image src={MOCK_URL_IMAGE} width={300} height={400} />
    </div>
  ));
