import styled from "styled-components";

export const BackgroundBlur = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  backdrop-filter: blur(2px);
  transition: opacity 0.2s;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  ${({ open }) => (open ? "visibility: visible; opacity: 1;" : "visibility: hidden; opacity: 0;")}
`;
