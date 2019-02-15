import styled, { css } from 'styled-components';
import { cssSize } from './utils';

export const StyledImage = styled.div`
  ${({ src, width = '100%', height = '100%' }) => css`
    background-image: url(${src});
    width: ${cssSize(width)};
    height: ${cssSize(height)};
    background-size: cover;
  `}
`;
