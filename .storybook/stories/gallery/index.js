import React from 'react';
import { storiesOf } from '@storybook/react';

import Gallery from '../../../components/gallery';

const MOCK_DATA = [
  {
    src:
      'https://a0.muscache.com/4ea/air/v2/pictures/ffdcc8f7-4887-417a-867e-10ab89490ed3.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90',
  },
  {
    src:
      'https://a0.muscache.com/4ea/air/v2/pictures/98851b0e-4c06-4a7b-82d5-975cacb917c3.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90',
  },
];

storiesOf('Gallery', module).add('default', () => (
  <div
    style={{
      width: '100%',
      height: '400px',
    }}
  >
    <Gallery data={MOCK_DATA} />
  </div>
));
