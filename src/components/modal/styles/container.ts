import styled, { css } from "styled-components";

export const ModalContainer = styled.div(({ open }: { open?: boolean }) => {
  return css`
    display: ${open ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  `;
});
