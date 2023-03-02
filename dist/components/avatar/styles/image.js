import styled, { css } from "styled-components";
import { rem } from "polished";
export const Image = styled.img(() => ({ size, style }) => {
    const circle = {
        xs: rem("24px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    return css `
    position: absolute;
    width: ${(style === null || style === void 0 ? void 0 : style.width) || circle[size]};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || circle[size]};
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    z-index: 1;

    &:active,
    &:focus-within {
      box-shadow: 0 0 0 ${rem("4px")} #e0e7ff;
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=image.js.map