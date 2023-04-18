import styled, { css } from "styled-components";
import { rem } from "polished";
export const IconWrapper = styled.div(({ isOpen, style, theme }) => {
    const { white, gray900 } = theme.palette;
    return css `
    display: flex;
    gap: ${rem("9px")};
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    & > svg {
      width: ${rem("14px")};

      & path {
        stroke: ${(style === null || style === void 0 ? void 0 : style.stroke) || (isOpen ? white : gray900)};
      }
    }
  `;
});
//# sourceMappingURL=iconWrapper.js.map