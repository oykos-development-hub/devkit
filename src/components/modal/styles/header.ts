import styled, { css } from "styled-components";
import { ModalProps } from "../types";

export const ModalHeader = styled.div<ModalProps>(() => ({ theme }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
});
