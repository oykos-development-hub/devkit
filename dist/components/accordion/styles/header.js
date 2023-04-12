import styled, { css } from "styled-components";
import { rem } from "polished";
export const Header = styled.div(({ isOpen, style, theme }) => {
    const { white, primary500 } = theme.palette;
    return css `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${rem("8px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || white};
    cursor: ${(style === null || style === void 0 ? void 0 : style.cursor) || "pointer"};
    border-radius: ${(style === null || style === void 0 ? void 0 : style.borderRadius) || "0"};

    & > span,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    svg {
      color: ${(style === null || style === void 0 ? void 0 : style.color) || (isOpen && primary500)};
    }

    & > svg {
      transform: ${isOpen && `rotate(180deg)`};
      transition: 0.3s all;

      & > path {
        stroke: ${(style === null || style === void 0 ? void 0 : style.stroke) || (isOpen && primary500)};
      }
    }
  `;
});
//# sourceMappingURL=header.js.map