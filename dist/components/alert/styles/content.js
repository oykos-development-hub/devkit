import styled, { css } from "styled-components";
import { rem } from "polished";
export const Content = styled.div(() => ({ theme, style }) => {
    const { white } = theme.palette;
    return css `
    display: flex;
    gap: ${rem("16px")};
    align-items: center;

    // Typography component
    & > p {
      display: contents;
      margin: 0;
      line-height: 0;
      color: ${(style === null || style === void 0 ? void 0 : style.color) || white};
    }

    // description (if exists)
    & p:nth-child(1) {
      color: ${(style === null || style === void 0 ? void 0 : style.color) || white};
    }
  `;
});
//# sourceMappingURL=content.js.map