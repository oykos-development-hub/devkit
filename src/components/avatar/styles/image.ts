import styled, { css } from "styled-components";
import { rem } from "polished";
import React from "react";
import { AvatarSizes } from "../types";

export const Image = styled.img<{
  isActive?: boolean;
  size: AvatarSizes;
  style?: React.CSSProperties;
}>(() => ({ isActive, style }) => {
  return css`
    width: 100%;
    height: 100%;
    object-fit: ${style?.objectFit || "cover"};
    object-position: ${style?.objectPosition || "center"};
    border-radius: 50%;
    z-index: 2;

    box-sizing: border-box;
    border: ${isActive ? rem("4px") + " solid #E0E7FF" : "none"};

    &:active,
    &:focus-within {
      box-sizing: border-box;
      border: ${rem("4px")} solid #e0e7ff;
    }

    ${{ ...style }}
  `;
});
