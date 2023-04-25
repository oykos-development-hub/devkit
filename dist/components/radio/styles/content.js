import styled, { css } from "styled-components";
import { Svg } from "../../icon/styles/shared";
import { rem } from "polished";
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
    const { primary100, primary500, gray50, gray300 } = theme.palette;
    const widthHeight = {
        sm: rem("16px"),
        md: rem("20px"),
    };
    const icon = {
        sm: rem("6px"),
        md: rem("8px"),
    };
    return css `
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(style === null || style === void 0 ? void 0 : style.width) || widthHeight[size]};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || widthHeight[size]};
    background-color: ${(style === null || style === void 0 ? void 0 : style.backgroundColor) || gray50};
    border: ${rem("1px")} solid ${primary500};
    border-radius: 50%;

    &:hover {
      box-shadow: ${disabled ? "none" : `0 0 0 ${rem("4px")} ${primary100}`};
    }

    &[disabled] {
      background: ${gray50};
      border: 0.063rem solid ${gray300};
    }

    & ${Svg} {
      visibility: ${checked ? "visible" : "hidden"};
      width: ${icon[size]};
      height: ${icon[size]};
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=content.js.map