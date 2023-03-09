import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertSizes } from "../types";
import { Theme } from "../../../shared/theme";
import { rem } from "polished";

export const Content = styled.div<{
  size: AlertSizes | string;
  style?: React.CSSProperties | undefined;
  theme?: DefaultTheme;
}>(() => ({ size, style, theme }) => {
  const themeToUse = theme || Theme;
  const { white } = themeToUse.palette;
  const defaultColor = style?.color || white;

  const gap = {
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
  };

  const iconSize = {
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1.5rem",
  };

  return css`
    display: flex;
    flex-direction: row;
    gap: ${gap[size]};
    align-items: center;

    & p {
      margin: 0;
      color: ${style?.color || defaultColor};
    }

    // description (if exists)
    & p:nth-child(1) {
      color: ${style?.color || defaultColor};
    }

    & svg {
      width: ${iconSize[size]} !important;
      height: ${iconSize[size]} !important;
    }

    & svg path {
      fill: ${style?.color || defaultColor} !important;
      color: ${style?.color || defaultColor} !important;
    }
  `;
});
