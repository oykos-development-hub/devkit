import styled, { css } from "styled-components";
import { rem } from "polished";
export const Content = styled.div(({ style }) => {
    return css `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: ${rem("4px")} ${rem("16px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || "transparent"};
    border-radius: ${(style === null || style === void 0 ? void 0 : style.borderRadius) || "0"};
  `;
});
//# sourceMappingURL=content.js.map