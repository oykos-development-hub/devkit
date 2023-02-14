import styled, { css } from "styled-components";
import { rem } from "polished";

export const Flex = styled.div<{
  alignItems?: string;
  gap?: string;
}>(() => ({ alignItems, gap }) => {
  return css`
    display: flex;
    align-items: ${alignItems || "center"};
    gap: ${gap || rem("6px")};
  `;
});
