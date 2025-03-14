import styled, { css } from "styled-components";
import { FileUploadVariants } from "../types";

export const ControlWrapper = styled.div<{ variant: FileUploadVariants | `${FileUploadVariants}` }>(({ variant }) => {
  return css`
    display: flex;
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  `;
});
