import { keyframes } from 'styled-components';

export const HoverSway = keyframes`
    0% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
              transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
              transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
  `;
