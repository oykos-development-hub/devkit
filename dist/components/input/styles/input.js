import styled, { css } from "styled-components";
import { rem } from "polished";
const shared = ({ style, theme, error }) => {
    var _a, _b;
    const { gray300, gray700, error50, error200, primary50, primary200, white } = theme.palette;
    return css `
    width: 100%;
    border-radius: ${((_a = theme.borderRadius) === null || _a === void 0 ? void 0 : _a.lg) || rem("8px")};
    border: ${rem("1px")} solid ${error ? error200 : gray300};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${error ? error200 : primary200};
      box-shadow: ${(style === null || style === void 0 ? void 0 : style.boxShadow) ||
        `0 ${rem("1px")} ${rem("2px")} rgba(16, 24, 40, 0.05), 0 0 0 ${rem("4px")} ${error ? error50 : primary50}`};
    }

    &[disabled] {
      color: ${gray700};
      background-color: ${white};
    }

    &::placeholder {
      display: block;
      color: ${gray700};
      font-family: ${((_b = theme === null || theme === void 0 ? void 0 : theme.fontFamily) === null || _b === void 0 ? void 0 : _b.one) || "sans-serif"};
      margin: 0;
      font-weight: 400;
      font-size: 0.85rem;
      line-height: 1.5rem;
    }

    ${Object.assign({}, style)}
  `;
};
export const StyledInput = styled.input(({ style, theme, error, maxLength }) => {
    return css `
    ${shared({ style, theme, error, maxLength })}
    text-align: ${maxLength === 1 ? "center" : "left"};
    height: ${rem("44px")};
  `;
});
export const Textarea = styled.textarea(({ style, theme, error }) => {
    return css `
    ${shared({ style, theme, error })}
    resize: none;
    height: 100%;
  `;
});
//# sourceMappingURL=input.js.map