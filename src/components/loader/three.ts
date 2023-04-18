import styled, { css, DefaultTheme } from "styled-components";
import React from "react";
import { rem } from "polished";

export const Three = styled.div<{
  variant?: "one" | "two" | "three";
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(({ style, theme }) => {
  const { gray300, primary500 } = theme!.palette;

  return css`
    border: ${rem("8px")} solid ${gray300};
    border-top: ${rem("8px")} ${primary500} solid;
    border-radius: 50%;
    height: ${rem("48px")};
    width: ${rem("48px")};
    animation: spin 1.5s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `;
});
