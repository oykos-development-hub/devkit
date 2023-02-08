import styled, { css } from "styled-components";
import { ModalProps } from "../types";

export const Container = styled.div<ModalProps>(() => ({ theme }) => {
  const { gray50 } = theme.palette;

  return css`
    //display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    //   background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    display: flex;
    align-items: center;
    justify-content: center;
  `;
});
