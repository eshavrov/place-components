import React from 'react';
import { storiesOf } from '@storybook/react';

import Images from '../../../components/images';

const MOCK_DATA = [
  [
    {
      src: 'http://localhost:4321/rooms/0.jpg',
    },
    {
      src: 'http://localhost:4321/rooms/1.jpg',
    },
  ],
  [
    {
      src: 'http://localhost:4321/rooms/2.jpg',
    },
    {
      src: 'http://localhost:4321/rooms/3.jpg',
    },
  ],
  [
    {
      src: 'http://localhost:4321/rooms/7.jpg',
    },
  ],
  [
    {
      src: 'http://localhost:4321/rooms/4.jpg',
    },
    {
      src: 'http://localhost:4321/rooms/5.jpg',
    },
  ],
  [
    {
      src: 'http://localhost:4321/rooms/6.jpg',
    },
    {
      src: 'http://localhost:4321/rooms/8.jpg',
    },
    {
      src: 'http://localhost:4321/rooms/9.jpg',
    },
  ],
  [
    {
      src: 'http://localhost:4321/rooms/1.jpg',
    },
    {
      src: 'http://localhost:4321/rooms/0.jpg',
    },
  ],
];

storiesOf('Images', module).add('default', () => <Images data={MOCK_DATA} />);
