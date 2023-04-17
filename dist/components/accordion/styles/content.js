import styled, { css } from "styled-components";
import { rem } from "polished";
export const ContentWrapper = styled.div(({ isOpen }) => {
    return css `
    max-height: ${isOpen ? "1000px" : "0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  `;
});
export const Content = styled.div(({ style, theme }) => {
    const { gray100 } = theme.palette;
    return css `
    display: flex;
    align-items: flex-start;
    padding: ${rem("4px")} ${rem("16px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || gray100};
  `;
});
//# sourceMappingURL=content.js.map