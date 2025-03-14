import React from "react";
import styled, { css } from "styled-components";
import { ButtonVariants, ButtonSizes } from "../types";
import { DefaultTheme } from "../../../types";

export const ButtonContent = styled.div<{
  disabled: boolean;
  variant: ButtonVariants | string;
  size: ButtonSizes | string;
  theme: DefaultTheme;
  customStyle: React.CSSProperties | undefined;
}>(({ disabled, theme, size, variant, customStyle }) => {
  const { gray300, gray700, white } = theme!.palette;

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
