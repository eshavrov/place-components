import styled, { css } from 'styled-components';

import { cssSize } from '../../constants.ui';

export const Container = styled.div`
  ${({ width = '100%', height = '100%' }) => css`
    position: relative;
    overflow: hidden;
    width: ${cssSize(width)};
    height: ${cssSize(height)};
  `}
`;

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledImage = styled.div`
  ${({ srcImage, width = '100%', height = '100%' }) => css`
    background-image: url(${srcImage});
    width: ${cssSize(width)};
    height: ${cssSize(height)};
    background-size: cover;
    background-position: 100% 100%;
  `}
`;
