import React from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";
import { AvatarSizes } from "../types";

export const ImageWrapper = styled.div<{
  size: AvatarSizes;
  style?: React.CSSProperties;
}>(() => ({ size, style }) => {
  const avatar = {
    xs: rem("24px"),
    sm: rem("36px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: ${avatar[size]};
    height: ${avatar[size]};
    z-index: 2;

    ${{ ...style }}
  `;
});
