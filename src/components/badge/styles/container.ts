import styled, { css, DefaultTheme } from "styled-components";
import { BadgeSizes, BadgeVariants } from "../types";
import React from "react";
import { rem } from "polished";

export const Container = styled.div<{
  variant: BadgeVariants | string;
  size: BadgeSizes | string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(({ variant, size, style, theme }) => {
  const { gray100, gray200, secondary50, gray600, primary500, warning500, error50, error500, success50, success500 } =
    theme!.palette;

  const padding = {
    sm: `${rem("2px")} ${rem("8px")}`,
    md: `${rem("2px")} ${rem("10px")}`,
    lg: `${rem("4px")}  ${rem("12px")}`,
  };

  const textColor = {
    primary: primary500,
    secondary: gray600,
    warning: warning500,
    error: error500,
    success: success500,
  };

  const bgColor = {
    primary: gray200,
    secondary: gray100,
    warning: secondary50,
    error: error50,
    success: success50,
  };

  const fontWeight = {
    sm: "400",
    md: "500",
    lg: "500",
  };

  const fontSize = {
    sm: rem("12px"),
    md: rem("14px"),
    lg: rem("14px"),
  };

  const lineHeight = {
    sm: rem("16px"),
    md: rem("20px"),
    lg: rem("20px"),
  };

  return css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${style?.padding || padding[size]};
    background-color: ${style?.backgroundColor || bgColor[variant]};
    color: ${style?.color || textColor[variant]};
    font-family: ${style?.fontFamily || theme.fontFamily.one};
    font-size: ${style?.fontSize || fontSize[size]};
    font-weight: ${style?.fontWeight || fontWeight[size]};
    line-height: ${style?.lineHeight || lineHeight[size]};
    border-radius: ${rem("16px")};
    mix-blend-mode: multiply;

    & svg {
      width: ${rem("6px")} !important;
      height: ${rem("6px")} !important;
      fill: ${style?.color || textColor[variant]};
    }
  `;
});
