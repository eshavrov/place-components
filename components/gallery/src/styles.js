import styled from 'styled-components';

import ImageOwned from '../../image';

export const Image = styled(ImageOwned)`
  * img {
    width: auto;
    height: calc(80vh - 56px);
    margin-top: 16px;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  background-color: #242429;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 -1px 8px rgba(0, 0, 0, 0.06);
  > .swiper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    > .swiper-wrapper {
      > .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
    }
  }
`;
