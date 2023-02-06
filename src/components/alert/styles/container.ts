import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertSizes, AlertVariants } from "../types";
import { Theme } from "../../../shared/theme";

export const Container = styled.div<{
  variant: AlertVariants;
  size: AlertSizes | keyof typeof AlertSizes;
  theme: DefaultTheme;
  style: React.CSSProperties | undefined;
}>(() => ({ theme, variant, size, style }) => {
  const themeToUse = theme || Theme;
  const { white, primary500, success500, error500, gray600 } = themeToUse.palette || {};

  const background = {
    primary: primary500,
    success: success500,
    error: error500,
    info: gray600,
  };

  const padding = {
    xs: "0.5rem 0.875rem",
    sm: "0.625rem 1rem",
    md: "0.625rem 1.125rem",
    lg: "0.75rem 1.25rem",
    xl: "1rem 1.75rem",
  };

  const textColor = {
    primary: white,
    success: white,
    error: white,
    info: white,
  };

  return css`
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${themeToUse.fontFamily?.one || "sans-serif"};
    background-color: ${background[variant]};
    color: ${style?.color || textColor[variant]} !important;
    border-radius: 0.5rem;
    padding: ${padding[size]};
    gap: 0.75rem;
    z-index: 999;

    & p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    label {
      color: ${style?.color || textColor[variant]};
    }

    & svg path {
      fill: ${style?.color || textColor[variant]} !important;
      color: ${style?.color || textColor[variant]} !important;
    }

    ${{ ...style }}
  `;
});

export const Row = styled.div<{
  size: AlertSizes;
}>(() => ({ size }) => {
  const padding = {
    xs: "0.5rem 0.875rem",
    sm: "0.625rem 1rem",
    md: "0.625rem 1.125rem",
    lg: "0.75rem 1.25rem",
    xl: "1rem 1.75rem",
  };

  return css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    order: 0;
    flex-grow: 1;
    word-wrap: break-word;
    padding: ${padding[size]};
  `;
});
