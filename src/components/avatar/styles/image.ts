import styled, { css } from "styled-components";
import { rem } from "polished";
import React from "react";
import { AvatarSizes } from "../types";

export const Image = styled.img<{
  isActive?: boolean;
  size: AvatarSizes;
  style?: React.CSSProperties;
}>(() => ({ isActive, size, style }) => {
  const circle = {
    xs: rem("24px"),
    sm: rem("36px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  return css`
    position: absolute;
    width: ${style?.width || circle[size]};
    height: ${style?.height || circle[size]};
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    z-index: 1;

    &:active,
    &:focus-within {
      box-shadow: 0 0 0 4px #e0e7ff !important;
    }

    ${{ ...style }}
  `;
});
