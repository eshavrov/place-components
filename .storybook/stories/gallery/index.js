import React from 'react';
import { storiesOf } from '@storybook/react';

import Gallery from '../../../components/gallery';

const MOCK_DATA = [
  {
    src: 'http://localhost:4321/rooms/0.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/1.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/2.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/3.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/4.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/5.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/6.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/7.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/8.jpg',
  },
  {
    src: 'http://localhost:4321/rooms/9.jpg',
  },
];
const MOCK_DATA2 = [
  {
    src: 'http://localhost:4321/image-0.jpg',
  },
  {
    src: 'http://localhost:4321/image-1.jpg',
  },
  {
    src: 'http://localhost:4321/image-2.jpg',
  },
  {
    src: 'http://localhost:4321/image-3.jpg',
  },
  {
    src: 'http://localhost:4321/image-4.jpg',
  },
  {
    src: 'http://localhost:4321/image-5.jpg',
  },
  {
    src: 'http://localhost:4321/image-6.jpg',
  },
  {
    src: 'http://localhost:4321/image-7.jpg',
  },
  {
    src: 'http://localhost:4321/image-8.jpg',
  },
];

storiesOf('Gallery', module)
  .add('default', () => (
    <div
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <Gallery data={MOCK_DATA} />
    </div>
  ))
  .add('fruits', () => (
    <div
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <Gallery data={MOCK_DATA2} />
    </div>
  ));
