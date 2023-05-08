import styled, { css } from "styled-components";
import { rem } from "polished";
export const Header = styled.div(({ isOpen, style, theme }) => {
    var _a, _b, _c, _d;
    return css `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${rem("8px")} ${rem("16px")};
    gap: ${rem("8px")};
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || ((_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.white)};
    transition: background-color 0.3s ease-in-out;
    cursor: ${(style === null || style === void 0 ? void 0 : style.cursor) || "pointer"};
    border-bottom: 1px solid ${(_b = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _b === void 0 ? void 0 : _b.gray200};
    border-radius: ${(style === null || style === void 0 ? void 0 : style.borderRadius) || "0"};
    overflow: hidden;

    & > span,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    svg {
      color: ${(style === null || style === void 0 ? void 0 : style.color) || ((_c = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _c === void 0 ? void 0 : _c.gray900)};
    }

    & > svg {
      width: ${rem("14px")};
      transform: ${isOpen && "rotate(180deg)"};
      transition: opacity 0.3s linear, transform 0.3s linear;

      & path {
        stroke: ${(style === null || style === void 0 ? void 0 : style.stroke) || ((_d = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _d === void 0 ? void 0 : _d.gray900)};
      }
    }
  `;
});
//# sourceMappingURL=header.js.map