import styled, { css } from 'styled-components';

import { BREAKPOINTS } from '@place-app/constants.ui';

const S = 8;

export const Container = styled.div`
  display: flex;
  height: auto;
  box-sizing: border-box;
  flex-direction: column;
`;

export const WrapperChunk = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  box-sizing: border-box;
  margin: 0 0 ${S}px;
  @media only screen and (max-width: ${BREAKPOINTS.MOBILE.MAX}px) {
    padding-bottom: 0;
    margin: 0;
  }
`;

export const ContainerChunk = styled.div`
  position: absolute;
  left: ${-S / 2}px;
  right: ${-S / 2}px;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  @media only screen and (max-width: ${BREAKPOINTS.MOBILE.MAX}px) {
    position: relative;
    flex-direction: column;
    left: 0;
    right: auto;
  }
`;

export const Tile = styled.div`
  ${({ grow = 1 }) => css`
    flex-grow: ${grow};
    height: 100%;
    margin: 0 ${S / 2}px;
    @media only screen and (max-width: ${BREAKPOINTS.MOBILE.MAX}px) {
      margin: 0 0 ${S}px;
      height: 60vw;
    }
  `}
`;
