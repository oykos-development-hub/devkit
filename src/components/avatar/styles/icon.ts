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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${circle[size]};
    height: ${circle[size]};
    border-radius: 50%;
    background-color: ${style?.backgroundColor || gray200};
    z-index: 2;

    & svg {
      width: ${icon[size]} !important;
      height: ${icon[size]} !important;

      & path {
        color: ${primary500};
        fill: none;
        stroke: ${style?.stroke || primary500};
        stroke-linecap: ${style?.strokeLinecap || "round"};
        stroke-linejoin: ${style?.strokeLinejoin || "round"};
        stroke-width: ${style?.strokeWidth || "2"};
      }
    }

    ${{ ...style }}
  `;
});
