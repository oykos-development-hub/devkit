import styled, { css } from "styled-components";
import React from "react";
import { SwitchSizes } from "../types";

export const Container = styled.div<{
  hasContent?: boolean;
  size: SwitchSizes | string;
  style?: React.CSSProperties;
}>(() => ({ hasContent, style }) => {
  return css`
    display: ${hasContent && "flex"};
    flex-direction: ${hasContent && "row"};
    align-items: ${hasContent && "flex-start"};
    padding: ${style?.padding || "0"};
    z-index: 1;

    ${{ ...style }}
  `;
});
