var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
export var Content = styled.div(function (_a) {
    var disabled = _a.disabled, theme = _a.theme, size = _a.size, variant = _a.variant, customStyle = _a.customStyle;
    var _b = theme.palette, gray300 = _b.gray300, gray700 = _b.gray700, white = _b.white;
    var fontSize = {
        xs: "0.875rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1rem",
        xl: "1.125rem",
    };
    var textColor = {
        primary: disabled ? gray300 : white,
        secondary: disabled ? gray300 : gray700,
        tertiary: white,
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", ";\n  "], ["\n    color: ", ";\n    font-size: ", ";\n  "])), (customStyle === null || customStyle === void 0 ? void 0 : customStyle.color) || textColor[variant], (customStyle === null || customStyle === void 0 ? void 0 : customStyle.fontSize) || fontSize[size]);
});
var templateObject_1;
//# sourceMappingURL=content.js.map