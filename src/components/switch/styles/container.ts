import styled, { css } from "styled-components";
import React from "react";
import { SwitchSizes } from "../types";
import { rem } from "polished";

export const Container = styled.div<{
  hasContent?: boolean;
  size: SwitchSizes | string;
  style?: React.CSSProperties;
}>(() => ({ hasContent, size, style }) => {
  const columnGap = {
    sm: rem("8px"),
    md: rem("12px"),
  };

  return css`
    display: ${hasContent && "flex"};
    flex-direction: ${hasContent && "row"};
    align-items: ${hasContent && "flex-start"};
    width: ${style?.width || "auto"};
    height: ${style?.height || "auto"};
    padding: ${style?.padding || "0"};
    column-gap: ${style?.columnGap || columnGap[size]};
    z-index: 1;

    ${{ ...style }}
  `;
});
