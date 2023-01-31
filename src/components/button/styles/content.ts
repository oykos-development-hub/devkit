import React from "react";
import styled, { css } from "styled-components";
import { ButtonVariants, ButtonSizes } from "../types";
import { DefaultTheme } from "../../../types";
import { Theme } from "../../../shared/theme";

export const Content = styled.div<{
  disabled: boolean;
  variant: ButtonVariants;
  size: ButtonSizes;
  theme: DefaultTheme;
  customStyle: React.CSSProperties | undefined;
}>(({ disabled, theme, size, variant, customStyle }) => {
  const themeToUse = theme || Theme;
  const { gray300, gray700, white } = themeToUse.palette;

  const fontSize = {
    xs: "0.875rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1rem",
    xl: "1.125rem",
  };

  const textColor = {
    primary: disabled ? gray300 : white,
    secondary: disabled ? gray300 : gray700,
    tertiary: white,
  };

  return css`
    color: ${customStyle?.color || textColor[variant]};
    font-size: ${customStyle?.fontSize || fontSize[size]};
  `;
});
