import styled, { css } from 'styled-components';
import IconOwned from '@place-app/icon.component';

export const ANIMATION_TIME = 400;
export const ANIMATION_TIME_ARROW = 600;

export const Body = styled.div`
  position: relative;
  height: ${({ height }) => `${height}px` || 'auto'};
  overflow: hidden;
  transition: height ${ANIMATION_TIME}ms, opacity ${ANIMATION_TIME}ms;
`;

export const InnerBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  color: #000;
  user-select: none;
  cursor: pointer;
  background-color: rgba(190, 190, 190, 0.05);
  :focus {
    box-shadow: 0 0 0 2px #55c6d6;
  }
`;

export const Title = styled.div`
  flex: 1 1 auto;
`;

export const StateIcon = styled(IconOwned).attrs({
  name: 'round-expand_more-24px',
})`
  flex: 0 0 auto;
  transform: scaleY(-1);
  transition: transform ${ANIMATION_TIME_ARROW}ms;
`;

export const Container = styled.div`
  ${({ borderStyle, collapsed }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: normal;
    white-space: nowrap;
    ${Body} {
      border-top: 1px ${borderStyle};
      ${collapsed &&
        css`
          height: 0;
          opacity: 0;
        `};
    }
    ${StateIcon} {
      ${collapsed &&
        css`
          transform: scaleY(1);
        `};
    }
  `}
`;
