import styled, { css } from "styled-components";
import { CSSProperties } from "react";
import { rem } from "polished";

export const Content = styled.div<{
  style?: CSSProperties;
}>(({ style }) => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: ${rem("4px")} ${rem("16px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${style?.backgroundColor || "transparent"};
    border-radius: ${style?.borderRadius || "0"};
  `;
});
