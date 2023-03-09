import styled, { css, DefaultTheme } from "styled-components";
import React from "react";

export const Container = styled.hr<{
  color?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(({ color, width, height, style, theme }) => {
  const { gray200 } = theme!.palette;

  return css`
    width: ${style?.width || width};
    height: ${style?.height || height};
    background-color: ${style?.backgroundColor || color || gray200};
    border: none;
  `;
});
