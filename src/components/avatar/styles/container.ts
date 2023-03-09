import React from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";
import { AvatarSizes } from "../types";

export const Container = styled.div<{
  supportingText: boolean;
  size: AvatarSizes;
  style?: React.CSSProperties;
}>(() => ({ supportingText, size, style }) => {
  const columnGap = {
    sm: rem("10px"),
    md: rem("12px"),
    lg: rem("12px"),
    xl: rem("16px"),
  };

  return css`
    display: ${supportingText && "flex"};
    flex-wrap: ${supportingText && "wrap"};
    flex-direction: ${supportingText && "row"};
    align-items: center;
    width: ${style?.width || "auto"};
    height: ${style?.height || "auto"};
    padding: ${style?.padding || "0"};
    column-gap: ${style?.columnGap || columnGap[size]};
    z-index: 1;

    ${{ ...style }}
  `;
});
