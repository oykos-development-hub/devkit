import styled, { css } from "styled-components";
import React from "react";
import { SwitchSizes } from "../types";
import { rem } from "polished";

export const Container = styled.div<{
  withContent?: boolean;
  size: SwitchSizes | string;
  style?: React.CSSProperties;
}>(() => ({ withContent, size, style }) => {
  const columnGap = {
    sm: rem("8px"),
    md: rem("12px"),
  };

  return css`
    display: ${withContent && "flex"};
    flex-direction: ${withContent && "row"};
    align-items: ${withContent && "flex-start"};
    width: ${style?.width || "auto"};
    height: ${style?.height || "auto"};
    padding: ${style?.padding || "0"};
    column-gap: ${style?.columnGap || columnGap[size]};
    z-index: 1;

    ${{ ...style }}
  `;
});
