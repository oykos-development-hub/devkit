import styled, { css } from "styled-components";
import { rem } from "polished";
export const Image = styled.img(() => ({ style, size }) => {
    const avatar = {
        xs: rem("24px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    return css `
    width: ${avatar[size]};
    height: ${avatar[size]};
    object-fit: ${(style === null || style === void 0 ? void 0 : style.objectFit) || "cover"};
    object-position: ${(style === null || style === void 0 ? void 0 : style.objectPosition) || "center"};
    border-radius: 50%;
    z-index: 2;

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=image.js.map