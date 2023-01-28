import styled, { css } from "styled-components";
import { ButtonVariants, ButtonSize } from "./types";
import { DefaultTheme } from "../../types";
import { Theme } from "../../shared/theme";

export const Container = styled.button<{
  disabled: boolean;
  variant: ButtonVariants;
  size: ButtonSize;
  theme: DefaultTheme;
}>(() => ({ theme, disabled, variant, size }) => {
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
    xs: "8px 14px",
    sm: "10px 16px",
    md: "10px 18px",
    lg: "12px 20px",
    xl: "16px 28px",
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
    border-radius: 8px;
    padding: ${padding[size]};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${hoverBackground[variant]};
      div {
        color: ${hoverTextColor[variant]};
      }
    }
  `;
});

export const Content = styled.div<{
  disabled: boolean;
  variant: ButtonVariants;
  size: ButtonSize;
  theme: DefaultTheme;
}>(({ disabled, theme, size, variant }) => {
  const themeToUse = theme || Theme;
  const { gray300, gray700, white } = themeToUse.palette;

  const fontSize = {
    xs: "14px",
    sm: "14px",
    md: "16px",
    lg: "16px",
    xl: "18px",
  };

  const textColor = {
    primary: disabled ? gray300 : white,
    secondary: disabled ? gray300 : gray700,
    tertiary: white,
  };

  return css`
    color: ${textColor[variant]};
    font-size: ${fontSize[size]};
  `;
});
