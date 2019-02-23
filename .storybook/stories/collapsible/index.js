import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Collapsible from '../../../components/collapsible/src/index';

const SizedCollapsible = styled(Collapsible)`
  width: 320px;
`;

storiesOf('Collapsible', module).add('default', () => {
  return [
    <SizedCollapsible tabIndex={0} title="Group 1" key="SizedCollapsible_0" initialCollapsed>
      <p>some content</p>
      <p>some content</p>
    </SizedCollapsible>,
    <SizedCollapsible tabIndex={0} title="Group 2" key="SizedCollapsible_1">
      <p>some content</p>
      <p>some content</p>
    </SizedCollapsible>,
  ];
});
