import styled, { css } from "styled-components";
import { FileUploadVariants } from "../types";

export const ButtonWrapper = styled.div<{
  variant: FileUploadVariants | string;
}>(({ variant }) => {
  return css`
    display: flex;
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    padding: 0;
  `;
});
