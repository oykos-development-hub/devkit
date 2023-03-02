import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";
import React from "react";
import { AvatarSizes } from "../types";

export const Icon = styled.div<{
  size: AvatarSizes;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(() => ({ size, style, theme }) => {
  const { gray200, primary500 } = theme!.palette;

  const circle = {
    xs: rem("24px"),
    sm: rem("36px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  const icon = {
    xs: rem("16px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
    xl: rem("32px"),
  };

  return css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${style?.width || circle[size]};
    height: ${style?.height || circle[size]};
    border-radius: 50%;
    background-color: ${style?.backgroundColor || gray200};
    z-index: 1;

    & svg {
      width: ${style?.width || icon[size]} !important;
      height: ${style?.height || icon[size]} !important;

      & path {
        color: ${style?.color || primary500};
        fill: ${style?.color || "none"};
        stroke: ${style?.stroke || primary500};
        stroke-linecap: ${style?.strokeLinecap || "round"};
        stroke-linejoin: ${style?.strokeLinejoin || "round"};
        stroke-width: ${style?.strokeWidth || "2"};
      }
    }

    &:active,
    &:focus-within {
      box-shadow: ${style?.boxShadow || `0 0 0 ${rem("4px")} #e0e7ff`};
    }

    ${{ ...style }}
  `;
});
