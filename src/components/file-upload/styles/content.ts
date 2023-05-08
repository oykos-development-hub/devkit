import styled, { css } from "styled-components";
import { rem } from "polished";
import { FileUploadVariants } from "../types";

export const Content = styled.div<{
  variant: FileUploadVariants | `${FileUploadVariants}`;
}>(({ variant }) => {
  return css`
    display: flex;
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: ${variant === "secondary" ? "space-between" : "center"};
    align-items: ${variant === "tertiary" ? "flex-start" : "center"};
    padding: 0;
    gap: ${variant === "primary" ? `${rem("24px")}` : `${rem("56px")}`};
  `;
});
