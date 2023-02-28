import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertSizes } from "../types";
import { Theme } from "../../../shared/theme";
import { rem } from "polished";

export const Content = styled.div<{
  size: AlertSizes;
  style?: React.CSSProperties | undefined;
  theme?: DefaultTheme;
}>(() => ({ size, style, theme }) => {
  const themeToUse = theme || Theme;
  const { white } = themeToUse.palette;
  const defaultColor = style?.color || white;

  const textSize = {
    sm: rem("12px"),
    md: rem("14px"),
    lg: rem("16px"),
  };

  const descriptionSize = {
    sm: rem("10px"),
    md: rem("12px"),
    lg: rem("14px"),
  };

  const iconSize = {
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1.5rem",
  };

  return css`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 0.75rem;
    align-items: center;

    & p {
      font-size: ${style?.fontSize || textSize[size]};
      line-height: 0;
      color: ${style?.color || defaultColor};
    }

    & p:nth-child(1) {
      font-size: ${style?.fontSize || descriptionSize[size]};
      line-height: 0;
      color: ${style?.color || defaultColor};
    }

    & svg:first-child {
      width: ${style?.width || iconSize[size]} !important;
      height: ${style?.height || iconSize[size]} !important;
    }

    & svg:last-child {
      width: ${style?.width || iconSize[size]} !important;
      height: ${style?.height || iconSize[size]} !important;
    }

    & svg path {
      fill: ${style?.color || defaultColor} !important;
      color: ${style?.color || defaultColor} !important;
    }

    ${{ ...style }}
  `;
});
