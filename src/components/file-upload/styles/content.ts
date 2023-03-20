import styled, { css } from "styled-components";
import { rem } from "polished";
import { FileUploadVariants } from "../types";

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

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
}>(({ variant }) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${variant === "primary" && "center"};
    padding: 0;
    gap: 12px;
  `;
});
