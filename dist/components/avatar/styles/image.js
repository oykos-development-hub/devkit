import styled, { css } from "styled-components";
import { rem } from "polished";
export const Image = styled.img(() => ({ isActive, style }) => {
    return css `
    width: 100%;
    height: 100%;
    object-fit: ${(style === null || style === void 0 ? void 0 : style.objectFit) || "cover"};
    object-position: ${(style === null || style === void 0 ? void 0 : style.objectPosition) || "center"};
    border-radius: 50%;
    z-index: 2;

    box-sizing: border-box;
    border: ${isActive ? rem("4px") + " solid #E0E7FF" : "none"};

    &:active,
    &:focus-within {
      box-sizing: border-box;
      border: ${rem("4px")} solid #e0e7ff;
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=image.js.map