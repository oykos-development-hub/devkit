import styled, { css } from "styled-components";
import { ModalProps } from "../types";

export const ModalBox = styled.div<ModalProps>(() => ({ theme }) => {
  const { white } = theme.palette;

  return css`
    background-color: ${white};
    width: fit-content;
    min-width: 25%;
    padding: 1em;
    box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.07), 0px 12px 16px -4px rgba(33, 33, 33, 0.1);
  `;
});
