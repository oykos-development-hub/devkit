import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";
import { AvatarSizes } from "../types";

export const Column = styled.div<{
  isActive?: boolean;
  size: AvatarSizes;
  style?: React.CSSProperties;
}>(() => ({ isActive, size, style }) => {
  const left = {
    sm: rem("42px"),
    md: rem("52px"),
    lg: rem("60px"),
    xl: rem("72px"),
  };

  const height = {
    xs: rem("24px"),
    sm: rem("36px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  return css`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    box-shadow: ${isActive ? "0 0 0 4px #E0E7FF" : "none"};
    height: ${style?.height || height[size]};

    &:nth-child(2) {
      margin-left: ${style?.marginLeft || left[size]};
      height: ${style?.height || height[size]};
    }

    ${{ ...style }}
  `;
});
