import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 17px;
  margin: 0px;
  background: #ddd;
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(0, 0, 0, 0.04),
    inset 0 0 6px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  outline: none;
  appearance: none;
  user-select: none;
  cursor: pointer;
  transition-property: background-color, color;
  transition-duration: 0.6s;
  transition-timing-function: ease-out;
  :hover {
    background-color: #eee;
  }
  :active {
    background-color: #eee;
  }
  :disabled {
    background-color: #eee;
    box-shadow: none;
    cursor: default;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.span`
  display: block;
  padding: 0 4px;
  color: rgba(48, 48, 48, 0.87);
  font-size: 16px;
  line-height: 24px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${Container}:hover & {
    color: rgba(20, 20, 20, 0.87);
  }
  ${Container}:active & {
    color: rgba(20, 20, 20, 0.87);
  }
  ${Container}:disabled & {
    color: rgba(33, 33, 33, 0.02);
  }
`;
