import styled, { css } from 'styled-components';

// http://b64.io/ convertion svg to base64

const CONTROL_ICON = {
  checkbox: {
    DEFAULT:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+',
    CHECKED:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTkgMTRsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXoiLz48L3N2Zz4=',
  },
  radio: {
    DEFAULT:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==',
    CHECKED:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6bTAtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==',
  },
};

export const Container = styled.label`
  display: inline-block;
  margin: 0 6px 8px 0;
  appearance: none;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  color: rgba(33, 33, 33, 0.54);
  line-height: 24px;
  font-size: 16px;
  overflow: hidden;
  ${({ asButton }) => asButton &&
    css`
      justify-content: center;
      min-width: 40px;
      height: 40px;
      padding: 0 17px;
      border: 1px solid rgba(33, 33, 33, 0.87);
      border-radius: 3px;
      color: rgba(33, 33, 33, 0.87);
      transition: 0.2s;
    `};
  > span:first-child {
    flex: 0 0 auto;
  }
  > span:last-child {
    flex: 1 1 auto;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  opacity: 0.54;
  margin-right: 12px;
  background-position: center;
  background-size: 24px;
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  ${({ asButton, type }) => !asButton
      ? css`
          + ${Label} {
            padding-right: 16px;
          }
          + ${Label} > ${Icon} {
            background-image: url(${CONTROL_ICON[type].DEFAULT});
          }
          :checked ~ ${Label} > ${Icon} {
            opacity: 0.87;
            ${!!CONTROL_ICON &&
              css`
                background-image: url(${CONTROL_ICON[type].CHECKED});
              `};
          }
          :focus ~ ${Label} {
            border-radius: 2px;
            box-shadow: 0 0 0 2px #55c6d6;
          }
        `
      : css`
          + ${Label} > ${Icon} {
            display: none;
          }
          :hover + ${Label} {
            background-color: rgba(33, 33, 33, 0.06);
          }
          :checked + ${Label} {
            background-color: #212121;
            color: #fff;
          }
          :focus ~ ${Label} {
            box-shadow: 0 0 0 2px #55c6d6;
          }
        `};
  :disabled + ${Label} {
    opacity: 0.54;
  }
`;
