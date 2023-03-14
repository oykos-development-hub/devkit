import styled, { css } from "styled-components";
import { rem } from "polished";
export const TextWrapper = styled.div(() => ({ size, style, theme }) => {
    const { gray600, gray900 } = theme.palette;
    const fontSize = {
        sm: rem("14px"),
        md: rem("16px"),
    };
    return css `
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: auto;
    height: auto;
    white-space: nowrap;

    & p {
      margin: 0;
      padding: 0;
      &:nth-child(1) {
        color: ${gray900};
        font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || fontSize[size]};
        font-weight: 500;
      }
      &:nth-child(2) {
        color: ${gray600};
        font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || fontSize[size]};
      }
    }
    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=textWrapper.js.map