var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { rem } from "polished";
export var Indicator = styled.div(function (_a) {
    var size = _a.size, online = _a.online, style = _a.style, theme = _a.theme;
    var _b = theme.palette, gray50 = _b.gray50, gray300 = _b.gray300, success500 = _b.success500;
    var indicatorColor = online ? success500 : gray300;
    var indicatorSize = {
        xs: rem("6px"),
        sm: rem("8px"),
        md: rem("10px"),
        lg: rem("12px"),
        xl: rem("14px"),
    };
    var top = {
        xs: rem("9px"),
        sm: rem("12px"),
        md: rem("15px"),
        lg: rem("18.4px"),
        xl: rem("21px"),
    };
    var right = {
        xs: rem("7.4px"),
        sm: rem("9.4px"),
        md: rem("11.4px"),
        lg: rem("13.6px"),
        xl: rem("15.5px"),
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    width: ", ";\n    height: ", ";\n    right: ", ";\n    top: ", ";\n    background-color: ", ";\n    border: ", " solid ", ";\n    border-radius: 50%;\n  "], ["\n    position: relative;\n    width: ", ";\n    height: ", ";\n    right: ", ";\n    top: ", ";\n    background-color: ", ";\n    border: ", " solid ", ";\n    border-radius: 50%;\n  "])), (style === null || style === void 0 ? void 0 : style.width) || indicatorSize[size], (style === null || style === void 0 ? void 0 : style.height) || indicatorSize[size], right[size], top[size], indicatorColor, rem("1.5px"), (style === null || style === void 0 ? void 0 : style.borderColor) || gray50);
});
var templateObject_1;
//# sourceMappingURL=indicator.js.map