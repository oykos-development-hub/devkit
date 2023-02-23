import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { Theme } from "../../../shared/theme";
import { rem } from "polished";
import { AvatarSizes } from "../types";

export const Container = styled.div<{
  supportingText: boolean;
  size: AvatarSizes;
  style?: React.CSSProperties;
}>(() => ({ supportingText, size, style }) => {
  const width = {
    xs: rem("132px"),
    sm: rem("132px"),
    md: rem("157px"),
    lg: rem("180px"),
    xl: rem("192px"),
  };

  const height = {
    xs: rem("36px"),
    sm: rem("36px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  const widthNoSupportingText = {
    xs: rem("24px"),
    sm: rem("36px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  return css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    width: ${supportingText ? style?.width || width[size] : widthNoSupportingText[size]};
    height: ${style?.height || height[size]};
    padding: ${style?.padding || "0"};
    z-index: 1;

    ${{ ...style }}
  `;
});
