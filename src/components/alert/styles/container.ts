import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertVariants } from "../types";

export const Container = styled.div<{
  variant: AlertVariants | `${AlertVariants}`;
  theme?: DefaultTheme;
  style?: React.CSSProperties;
}>(() => ({ theme, variant, style }) => {
  const { primary500, success500, error500, gray600, warning500 } = theme!.palette;

  const background = {
    primary: primary500,
    success: success500,
    error: error500,
    info: gray600,
    warning: warning500,
  };

  return css`
    display: flex;
    align-items: center;
    font-family: ${theme.fontFamily?.one || "sans-serif"};
    background-color: ${background[variant]};
    border-radius: 0.125rem;
    z-index: 999;
    ${{ ...style }}
  `;
});
