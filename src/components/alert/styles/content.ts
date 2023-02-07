import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { AlertSizes, AlertVariants } from "../types";
import { Theme } from "../../../shared/theme";
import { TypographyVariants } from "../../typography/variants";

export const Content = styled.div<{
  size: AlertSizes;
  style?: React.CSSProperties | undefined;
  theme?: DefaultTheme;
}>(() => ({ size, style, theme }) => {
  const themeToUse = theme || Theme || {};
  const fontSize = themeToUse.typographyFontSize.body;

  const textSize = {
    xs: fontSize.sm,
    sm: fontSize.sm,
    md: fontSize.md,
    lg: fontSize.lg,
    xl: fontSize.lg,
  };

  return css`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 1rem;

    & p {
      font-size: ${style?.fontSize || textSize[size]} !important;
    }

    ${{ ...style }}
  `;
});
