import styled, { css } from "styled-components";
import { rem } from "polished";
export const Option = styled.div(({ theme, isDisabled, style }) => {
    const { gray900, gray600 } = theme.palette;
    return css `
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: ${(style === null || style === void 0 ? void 0 : style.fontFamily) || theme.fontFamily.one};

      & * {
        color: ${isDisabled ? gray600 : (style === null || style === void 0 ? void 0 : style.color) || gray900};
        font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || rem("14px")};
        font-weight: 400;
        line-height: ${rem("20px")};
        margin: 0;
        padding: 0;
      }
    `;
});
export const OptionContent = styled.div `
  display: flex;
  align-content: center;
  align-items: center;
  gap: ${rem("8px")};
`;
//# sourceMappingURL=option.js.map