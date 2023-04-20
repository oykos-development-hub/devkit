import styled, { css } from "styled-components";
const shared = ({ style, theme, error }) => {
    var _a, _b;
    const { gray400, gray600, error200, primary50, primary200, white } = theme.palette;
    return css `
    width: 100%;
    border-radius: ${((_a = theme.borderRadius) === null || _a === void 0 ? void 0 : _a.lg) || "0.5em"};
    border: ${`${((_b = theme.borderWidth) === null || _b === void 0 ? void 0 : _b.xs) || "1px"} solid ${error ? error200 : gray400}`};
    box-sizing: border-box;
    outline: none;
    font-family: ${(style === null || style === void 0 ? void 0 : style.fontFamily) || "Inter"};

    &:focus {
      border-color: ${error ? error200 : primary200};
      box-shadow: ${(style === null || style === void 0 ? void 0 : style.boxShadow) || `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${primary50}`};
    }

    &[disabled] {
      color: ${gray600};
      background-color: ${white};
    }

    &::placeholder {
      color: ${gray600};
      font-size: 14px;
    }

    ${Object.assign({}, style)}
  `;
};
export const StyledInput = styled.input(({ style, theme, error, maxLength }) => {
    return css `
    ${shared({ style, theme, error, maxLength })}
    text-align: ${maxLength === 1 ? "center" : "left"};
    height: 40px;
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