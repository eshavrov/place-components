import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../../../components/image';

const MOCK_URL_IMAGE =
  'https://a0.muscache.com/4ea/air/v2/pictures/98851b0e-4c06-4a7b-82d5-975cacb917c3.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90';

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
