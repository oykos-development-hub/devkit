import styled, { css } from "styled-components";
import { InputProps } from "../types";

export const Container = styled.div(({ style }: Partial<InputProps>) => {
  return css`
    width: ${style?.width || "100%"};
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    position: relative;

    & > div {
      position: relative;
    }
  `;
});
