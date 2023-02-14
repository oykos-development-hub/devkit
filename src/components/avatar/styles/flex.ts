import styled, { css } from "styled-components";
import { rem } from "polished";
import { AvatarVariants } from "../types";

export const Flex = styled.div<{
  variant: AvatarVariants | string;
}>(() => ({ variant }) => {
  const gap = (variantName: string) => (variantName === AvatarVariants.square ? rem("6px") : "0");

  return css`
    display: flex;
    align-items: center;
    gap: ${gap(variant)};
  `;
});
