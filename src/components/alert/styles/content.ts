import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertSizes } from "../types";
import { Theme } from "../../../shared/theme";

export const Content = styled.div<{
  size: AlertSizes;
  style?: React.CSSProperties | undefined;
  theme?: DefaultTheme;
}>(() => ({ size, style, theme }) => {
  const themeToUse = theme || Theme;
  const { white } = themeToUse.palette;
  const defaultColor = style?.color || white;

  const textSize = {
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
  };

  const iconSize = {
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1.5rem",
  };

  const lineHeight = {
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
  };

  return css`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 0.75rem;

    & p {
      font-size: ${style?.fontSize || textSize[size]};
      line-height: ${style?.lineHeight || lineHeight[size]};
      color: ${style?.color || defaultColor};
    }

    & p:nth-child(1) {
      font-size: 0.875rem;
      line-height: 1.25rem;
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
