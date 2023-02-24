import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
import { rem } from "polished";
export const Content = styled.div(() => ({ size, style, theme }) => {
    const themeToUse = theme || Theme;
    const { gray600, gray900 } = themeToUse.palette;
    const width = {
        sm: rem("90px"),
        md: rem("105px"),
        lg: rem("120px"),
        xl: rem("120px"),
    };
    const height = {
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    const name = {
        sm: rem("12px"),
        md: rem("14px"),
        lg: rem("16px"),
        xl: rem("18px"),
    };
    const email = {
        sm: rem("10px"),
        md: rem("12px"),
        lg: rem("16px"),
        xl: rem("16px"),
    };
    const marginTopName = {
        sm: rem("12px"),
        md: rem("12px"),
        lg: rem("14px"),
        xl: rem("16px"),
    };
    const marginTopEmail = {
        sm: rem("14px"),
        md: rem("16px"),
        lg: rem("20px"),
        xl: rem("24px"),
    };
    return css `
    width: ${(style === null || style === void 0 ? void 0 : style.width) || width[size]};
    height: ${(style === null || style === void 0 ? void 0 : style.height) || height[size]};

    & p:nth-child(1) {
      color: ${(style === null || style === void 0 ? void 0 : style.color) || gray900};
      font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || name[size]};
      line-height: 0;
      margin-top: ${(style === null || style === void 0 ? void 0 : style.marginTop) || marginTopName[size]};
    }

    & p:nth-child(2) {
      color: ${(style === null || style === void 0 ? void 0 : style.color) || gray600};
      font-size: ${(style === null || style === void 0 ? void 0 : style.fontSize) || email[size]};
      text-decoration: ${(style === null || style === void 0 ? void 0 : style.textDecoration) || "none"};
      line-height: 0;
      margin-top: ${(style === null || style === void 0 ? void 0 : style.marginTop) || marginTopEmail[size]};
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=content.js.map