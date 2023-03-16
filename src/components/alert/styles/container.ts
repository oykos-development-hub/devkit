import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertVariants } from "../types";

export const Container = styled.div<{
  variant: AlertVariants | string;
  theme: DefaultTheme;
  style: React.CSSProperties | undefined;
}>(() => ({ theme, variant, style }) => {
  const { primary500, success500, error500, gray600 } = theme!.palette;

  const background = {
    primary: primary500,
    success: success500,
    error: error500,
    info: gray600,
  };

  return css`
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${theme.fontFamily?.one || "sans-serif"};
    background-color: ${background[variant]};
    border-radius: 0.125rem;
    z-index: 999;
    width: ${style?.width || "auto"};
    height: ${style?.height || "auto"};

    ${{ ...style }}
  `;
});