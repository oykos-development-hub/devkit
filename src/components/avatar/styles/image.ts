import styled, { css } from "styled-components";
import { rem } from "polished";
import React from "react";
import { AvatarSizes, AvatarVariants } from "../types";

export const Image = styled.img<{
  variant: AvatarVariants | string;
  size: AvatarSizes;
  style?: React.CSSProperties;
}>(() => ({ variant, size, style }) => {
  const circle = {
    xs: rem("24px"),
    sm: rem("32px"),
    md: rem("40px"),
    lg: rem("48px"),
    xl: rem("56px"),
  };

  switch (variant) {
    case AvatarVariants.square:
      return css`
        width: ${style?.width || rem("160px")};
        height: ${style?.height || rem("220px")};
        object-fit: cover;

        ${{ ...style }}
      `;
    case AvatarVariants.circle:
      return css`
        width: ${style?.width || circle[size]};
        height: ${style?.height || circle[size]};
        object-fit: cover;
        border-radius: 50%;

        &:hover {
          cursor: pointer;
        }

        &:active,
        &:focus-within {
          border: ${rem("4px")} solid #e0e7ff;
        }

        ${{ ...style }}
      `;
    default:
      return AvatarVariants.square;
  }
});
