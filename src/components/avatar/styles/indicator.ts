import styled, { css, DefaultTheme } from "styled-components";
import { AvatarSizes } from "../types";
import React from "react";
import { rem } from "polished";

export const Indicator = styled.span<{
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

  const indicatorPosition = {
    xs: rem("16px"),
    sm: rem("26px"),
    md: rem("28px"),
    lg: rem("34px"),
    xl: rem("39px"),
  };

  return css`
    position: absolute;
    width: ${indicatorSize[size]};
    height: ${indicatorSize[size]};
    top: ${indicatorPosition[size]};
    left: ${indicatorPosition[size]};
    background-color: ${indicatorColor};
    border: ${rem("1.5px")} solid ${gray50};
    border-radius: 50%;
    z-index: 3;
  `;
});
