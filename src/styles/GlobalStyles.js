import { createGlobalStyle } from 'styled-components';
import GmarketSans from '../assets/fonts//GmarketSans.woff2';
import PretendardExtraBold from '../assets/fonts//Pretendard-ExtraBold.woff2';
import PretendardBold from '../assets/fonts//Pretendard-Bold.woff2';
import PretendardSemiBold from '../assets/fonts//Pretendard-SemiBold.woff2';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'GmarketSans';
    src: local('GmarketSansBold'), local('GmarketSans-Bold'), local('Gmarket Sans Bold'),
      url(${GmarketSans}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-ExtraBold'), url(${PretendardExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Bold'), url(${PretendardBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-SemiBoldd'), url(${PretendardSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Regular'), url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @keyframes fadeInObject {
    0% {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  @keyframes fadeInLine {
    0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  @keyframes fadeInApp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  @keyframes fadeInFromTop {
  0% {
    opacity: 0;
    clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%);
  }
  to {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  }

  @keyframes rotate {
    0% {
      /* transform-origin: 49.6% 50%; */
      transform: rotate(0);
    }
    100% {
      transform: rotate(-180deg);
    }
  }
  * {
    box-sizing: border-box;
    font-family: 'Pretendard';
  }
`;
