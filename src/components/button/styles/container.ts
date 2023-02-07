import styled, { css } from "styled-components";
import { ButtonVariants, ButtonSizes } from "../types";
import { DefaultTheme } from "../../../types";
import { Theme } from "../../../shared/theme";
import React from "react";

export const Container = styled.button<{
  disabled: boolean;
  variant: ButtonVariants;
  size: ButtonSizes;
  theme: DefaultTheme;
  style: React.CSSProperties | undefined;
}>(() => ({ theme, disabled, variant, size, style }) => {
  const themeToUse = theme || Theme;
  const { gray50, white, primary500, secondary500, gray200, error500, error100, primary800, secondary800, error800 } =
    themeToUse.palette;

  const background = {
    primary: disabled ? gray200 : primary500,
    secondary: disabled ? gray200 : secondary500,
    tertiary: disabled ? error100 : error500,
  };

  const hoverBackground = {
    primary: primary800,
    secondary: secondary800,
    tertiary: error800,
  };

  const borderColor = {
    primary: disabled ? gray200 : primary500,
    secondary: disabled ? gray200 : secondary500,
    tertiary: disabled ? error100 : error500,
  };

  const padding = {
    xs: "0.5rem 0.875rem",
    sm: "0.625rem 1rem",
    md: "0.625rem 1.125rem",
    lg: "0.75rem 1.25rem",
    xl: "1rem 1.75rem",
  };

  const hoverTextColor = {
    primary: white,
    secondary: gray50,
    tertiary: white,
  };

  return css`
    align-items: center;
    justify-content: center;
    background-color: ${background[variant]};
    border: 1px solid ${borderColor[variant]};
    border-radius: ${themeToUse.borderRadius.lg || "0.5rem"};
    padding: ${padding[size]};
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${hoverBackground[variant]};
      div {
        color: ${hoverTextColor[variant]};
      }
    }
    ${{ ...style }}
  `;
});