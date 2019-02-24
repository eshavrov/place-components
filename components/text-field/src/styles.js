import styled, { css } from 'styled-components';
import IconComponent from '@place-app/icon.component';

import { STATUS_KEYS } from './index';

export const COLORS = {
  DEFAULT: '#212121',
  ERROR: '#B00020',
  SUCCESS: '#536DFE',
};

export const Icon = styled(IconComponent)`
  position: absolute;
  top: 50%;
  ${({ left }) => (!left ? 'right: 12px' : 'left: 12px')};
  transform: translateY(-50%);
`;

export const Label = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  padding: 0 4px;
  background-color: inherit;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  line-height: 14px;
  color: rgba(33, 33, 33, 0.54);
  transform: translate3d(4px, -50%, 0);
  transition: 0.2s;
  cursor: text;
`;

const cssLabelActive = css`
  ~ ${Label} {
    transform: translate3d(${({ leftIconName }) => (!leftIconName ? '-2px' : '-38px')}, -32px, 0);
    font-size: 11px;
    color: rgba(33, 33, 33, 0.87);
  }
  ~ svg {
    opacity: 0.87;
  }
`;

const errorStyles = css`
  border-color: ${COLORS.ERROR};
  color: ${COLORS.ERROR};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid rgba(33, 33, 33, 0.4);
  background-color: inherit;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  line-height: 18px;
  color: rgba(33, 33, 33, 0.87);
  transition: 0.4s;
  outline: none;
  appearance: none;
  ${({ right }) => right && 'text-align: right'};
  /* stylelint-disable-next-line */
  -moz-appearance: textfield;
  margin: 0;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
  ${({ value }) => !!value && cssLabelActive}
  :disabled {
    border-color: rgba(33, 33, 33, 0.4) !important;
    opacity: 0.24;
    ~ svg {
      opacity: 0.24;
    }
  }
  :focus {
    border-color: rgba(33, 33, 33, 0.87);
    ${cssLabelActive};
  }

  :hover {
    border-color: rgba(33, 33, 33, 0.7);
    ~ svg {
      opacity: 0.87;
    }
  }

  ${({ status }) => status === STATUS_KEYS.ERROR &&
    css`
      ${errorStyles};
      :hover,
      :focus {
        ${errorStyles};
      }
    `}
`;

export const Container = styled.label`
  display: block;
  position: relative;
  width: 100%;
  height: 40px;
  background-color: inherit;
  ${Icon} {
    opacity: 0.54;
    transition: 0.4s;
  }
  ${({ hasLeftIcon, hasRightIcon }) => css`
    ${Label} {
      left: ${!hasLeftIcon ? '12px' : '48px'};
    }
    ${(hasLeftIcon || hasRightIcon) &&
      css`
        ${Input} {
          ${hasLeftIcon && 'padding-left: 48px;'} ${hasRightIcon && 'padding-right: 48px;'};
        }
      `};
  `};
`;
