import styled, { css } from "styled-components";
import { rem } from "polished";
export const Option = styled.div(({ theme, isDisabled, style }) => {
    const { gray900, gray600 } = theme.palette;
    return css `
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      font-family: ${(style === null || style === void 0 ? void 0 : style.fontFamily) || theme.fontFamily.one};

      & * {
        color: ${isDisabled ? gray600 : (style === null || style === void 0 ? void 0 : style.color) || gray900};
        font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || rem("14px")};
      }

      & > div:first-child {
        display: flex;
        align-items: center;
        gap: ${rem("8px")};
      }

      & .option-icon {
        display: flex;
      }
    `;
});
//# sourceMappingURL=option.js.map