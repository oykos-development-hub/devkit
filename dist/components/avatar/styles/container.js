import styled, { css } from "styled-components";
import { rem } from "polished";
export const Container = styled.div(() => ({ supportingText, size, style }) => {
    const width = {
        xs: rem("132px"),
        sm: rem("132px"),
        md: rem("157px"),
        lg: rem("180px"),
        xl: rem("192px"),
    };
    const height = {
        xs: rem("36px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    const widthNoSupportingText = {
        xs: rem("24px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    return css `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    width: ${supportingText ? (style === null || style === void 0 ? void 0 : style.width) || width[size] : widthNoSupportingText[size]};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || height[size]};
    padding: ${(style === null || style === void 0 ? void 0 : style.padding) || "0"};
    z-index: 1;

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=container.js.map