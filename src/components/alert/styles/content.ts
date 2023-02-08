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
  const { white } = themeToUse.palette || {};
  const defaultColor = style?.color || white;

  const textSize = {
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
  };

  const leftIconSize = {
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1.5rem",
  };

  const rightIconSize = {
    sm: "0.729rem",
    md: "0.729rem",
    lg: "0.875rem",
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
      font-size: ${textSize[size]};
      line-height: ${lineHeight[size]};
      color: ${defaultColor};
    }

    & p:nth-child(1) {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${defaultColor};
    }

    & svg:first-child {
      width: ${leftIconSize[size]} !important;
      height: ${leftIconSize[size]} !important;
    }

    & svg:last-child {
      width: ${rightIconSize[size]} !important;
      height: ${rightIconSize[size]} !important;
    }

    & svg path {
      fill: ${defaultColor} !important;
      color: ${defaultColor} !important;
    }

    ${{ ...style }}
  `;
});
