import styled, { css } from "styled-components";
export const ButtonContent = styled.div(({ disabled, theme, size, variant, customStyle }) => {
    const { gray300, gray700, white } = theme.palette;
    const fontSize = {
        xs: "0.875rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1rem",
        xl: "1.125rem",
    };
    const textColor = {
        primary: disabled ? gray300 : white,
        secondary: disabled ? gray300 : gray700,
        tertiary: white,
    };
    return css `
    color: ${(customStyle === null || customStyle === void 0 ? void 0 : customStyle.color) || textColor[variant]};
    font-size: ${(customStyle === null || customStyle === void 0 ? void 0 : customStyle.fontSize) || fontSize[size]};
  `;
});
//# sourceMappingURL=content.js.map