import styled, { css } from "styled-components";
import { AvatarVariants } from "../types";

export const Row = styled.div<{
  variant: AvatarVariants | string;
}>(() => ({ variant }) => {
  const margin = (variantName: string) => (variantName === AvatarVariants.circle ? "auto" : "unset");

  return css`
    margin: ${margin(variant)};
    flex: none;
    flex-direction: row;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  `;
});
