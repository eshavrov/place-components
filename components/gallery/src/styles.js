import styled from 'styled-components';

// TODO: вынести в отдельный модуль константы
const BREAKPOINTS = {
  MOBILE: 767,
};

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 36vw;
  box-sizing: border-box;
  background-color: #242429;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 -1px 8px rgba(0, 0, 0, 0.06);
  @media (max-width: ${BREAKPOINTS.MOBILE}px) {
    height: 80vh;
  }
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
        * img {
          height: calc(36vw - 56px);
          margin-top: -16px;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          @media (max-width: ${BREAKPOINTS.MOBILE}px) {
            height: calc(80vh - 64px);
          }
        }
      }
    }
  }
`;
