import styled, { css, DefaultTheme } from "styled-components";
import { AvatarSizes } from "../types";
import React from "react";
import { rem } from "polished";

export const Indicator = styled.div<{
  size: AvatarSizes;
  online?: boolean;
  style?: React.CSSProperties;
  theme?: DefaultTheme;
}>(({ size, online, style, theme }) => {
  const { gray50, gray300, success500 } = theme!.palette;
  const indicatorColor = online ? success500 : gray300;

  const indicatorSize = {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("10px"),
    lg: rem("12px"),
    xl: rem("14px"),
  };

  const top = {
    xs: rem("9px"),
    sm: rem("12px"),
    md: rem("15px"),
    lg: rem("18.4px"),
    xl: rem("21px"),
  };

  const right = {
    xs: rem("7.4px"),
    sm: rem("9.4px"),
    md: rem("11.4px"),
    lg: rem("13.6px"),
    xl: rem("15.5px"),
  };

  return css`
    position: relative;
    width: ${style?.width || indicatorSize[size]};
    height: ${style?.height || indicatorSize[size]};
    right: ${right[size]};
    top: ${top[size]};
    background-color: ${indicatorColor};
    border: ${rem("1.5px")} solid ${style?.borderColor || gray50};
    border-radius: 50%;
  `;
});
