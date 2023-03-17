import styled, { css } from "styled-components";
import { rem } from "polished";
import React from "react";
import { AvatarSizes } from "../types";

export const Image = styled.img<{
  size: AvatarSizes | string;
  style?: React.CSSProperties;
}>(() => ({ style, size }) => {
  const avatar = {
    xs: rem("24px"),
    sm: rem("36px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  return css`
    width: ${avatar[size]};
    height: ${avatar[size]};
    object-fit: ${style?.objectFit || "cover"};
    object-position: ${style?.objectPosition || "center"};
    border-radius: 50%;
    z-index: 2;

    ${{ ...style }}
  `;
});
