import styled, { css } from "styled-components";
import { ModalProps } from "../types";

export const ModalFooter = styled.div<ModalProps>(() => ({ theme }) => {
  return css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
  `;
});
