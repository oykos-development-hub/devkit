import styled, { css, DefaultTheme } from "styled-components";
import React from "react";
import { rem } from "polished";

export const Three = styled.div<{
  variant?: "one" | "two" | "three";
  primaryColor?: string;
  secondaryColor?: string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(({ style, primaryColor, secondaryColor, theme }) => {
  const { gray200, primary500 } = theme!.palette;

  return css`
    border: ${rem("8px")} solid ${primaryColor || gray200};
    border-top: ${rem("8px")} ${secondaryColor || primary500} solid;
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
