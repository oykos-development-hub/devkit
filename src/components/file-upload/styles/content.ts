import styled, { css, DefaultTheme } from "styled-components";
import { rem } from "polished";
import { FileUploadVariants } from "../types";

export const IconWrapper = styled.div<{
  customIcon: boolean;
}>(({ customIcon }) => {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    ${!customIcon &&
    `& svg {
       width: ${rem("52px")} !important;
       height: ${rem("52px")} !important;
      
      & path {      
        fill: none;
        stroke: #212121;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      }
    `}
  `;
});

export const ContentWrapper = styled.div<{
  variant: FileUploadVariants | string;
}>(({ variant }) => {
  return css`
    display: flex;
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: ${variant === "primary" ? `${rem("24px")}` : `${rem("56px")}`};
  `;
});

export const ButtonWrapper = styled.div<{
  variant: FileUploadVariants | string;
}>(({ variant }) => {
  return css`
    display: ${variant === "primary" ? "block" : "flex"};
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    padding: 0;
  `;
});

export const TextWrapper = styled.div<{
  variant: FileUploadVariants | string;
  theme: DefaultTheme;
}>(({ variant, theme }) => {
  const { gray600, gray900 } = theme!.palette;

  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${variant === "primary" && `align-items:center`};
    padding: 0;
    gap: ${rem("12px")};

    & p:first-of-type {
      color: ${gray900};
    }

    & span {
      color: ${gray600};
    }
  `;
});
