import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";
import { AvatarSizes } from "../types";

export const ImageWrapper = styled.div<{
  isActive?: boolean;
  size: AvatarSizes;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(() => ({ isActive, size, style, theme }) => {
  const { primary500, gray200 } = theme!.palette;

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
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: auto;
    height: auto;
    z-index: 2;
    border-radius: 50%;
    background-color: ${gray200};
    box-shadow: ${isActive ? `0 0 0 ${rem("4px")} #E0E7FF` : "none"};

    &:active,
    &:focus-within {
      box-shadow: 0 0 0 ${rem("4px")} #e0e7ff;
    }
    
    & svg {
      width: ${icon[size]};
      height: ${icon[size]};

      & path {
        color: ${primary500};
        fill: none;
        stroke: ${style?.stroke || primary500};
        stroke-linecap: ${style?.strokeLinecap || "round"};
        stroke-linejoin: ${style?.strokeLinejoin || "round"};
        stroke-width: ${style?.strokeWidth || "2"};
      }

    ${{ ...style }}
  `;
});
