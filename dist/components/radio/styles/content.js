import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
export const Icon = styled.svg(({ children }) => children);
export const Circle = styled.circle.attrs({
    cx: 12,
    cy: 12,
    r: 5,
})(({ disabled, style, theme }) => {
    const themeToUse = theme || Theme;
    const { primary500, gray300 } = themeToUse.palette;
    return css `
    fill: ${disabled ? (style === null || style === void 0 ? void 0 : style.color) || gray300 : primary500};
    stroke: ${disabled ? (style === null || style === void 0 ? void 0 : style.color) || gray300 : primary500};

    ${Object.assign({}, style)}
  `;
});
export const HiddenRadio = styled.input.attrs({ type: "radio" }) `
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 0.063rem;
  height: 0.063rem;
  margin: -0.063rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;
export const Content = styled.div(({ checked, disabled, theme, size, style }) => {
    const themeToUse = theme || Theme;
    const { primary500, gray50, gray300 } = themeToUse.palette;
    const widthHeight = {
        sm: "1rem",
        md: "1.25rem",
    };
    return css `
    display: inline-block;
    width: ${(style === null || style === void 0 ? void 0 : style.width) || widthHeight[size]};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || widthHeight[size]};
    background: ${gray50};
    border: 1px solid ${primary500};
    border-radius: 50%;

    ${HiddenRadio}:focus + & {
      box-shadow: ${disabled ? "none" : "0 0 0 0.063rem #f4ebff"};
    }

    &:hover {
      box-shadow: ${disabled ? "none" : "0 0 0 0.25rem #f4ebff"};
    }

    &[disabled] {
      background: ${gray50};
      border: 0.063rem solid ${gray300};
    }

    ${Icon} {
      visibility: ${checked ? "visible" : "hidden"};
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=content.js.map