import styled, { css } from "styled-components";
import { AlertSizes } from "../types";
import { rem } from "polished";

export const Wrapper = styled.div<{
  size: AlertSizes | string;
}>(() => ({ size }) => {
  const padding = {
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
  };

  return css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    align-self: stretch;
    word-wrap: break-word;
    padding: ${padding[size]};
  `;
});
