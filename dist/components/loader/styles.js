import styled, { keyframes } from "styled-components";
const spin = keyframes `
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
const dash = keyframes `
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124;
  }
`;
export const LoaderWrapper = styled.div `
  position: relative;
  margin: 0px auto;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  svg {
    animation: ${spin} 2s linear infinite;
    -webkit-animation: ${spin} 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;

    circle {
      stroke-dasharray: 150, 200;
      stroke-dashoffset: -10;
      -webkit-animation: ${dash} 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
      animation: ${dash} 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
      stroke-linecap: round;
    }
  }
`;
//# sourceMappingURL=styles.js.map