var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import styled, { css } from "styled-components";
import { rem } from "polished";
export var Container = styled.div(function () { return function (_a) {
    var supportingText = _a.supportingText, size = _a.size, style = _a.style;
    var width = {
        xs: rem("132px"),
        sm: rem("132px"),
        md: rem("157px"),
        lg: rem("180px"),
        xl: rem("192px"),
    };
    var height = {
        xs: rem("36px"),
        sm: rem("36px"),
        md: rem("40px"),
        lg: rem("48px"),
        xl: rem("56px"),
    };
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    overflow: hidden;\n    justify-content: space-between;\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n    z-index: 1;\n\n    ", "\n  "], ["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    overflow: hidden;\n    justify-content: space-between;\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n    z-index: 1;\n\n    ", "\n  "])), supportingText && ((style === null || style === void 0 ? void 0 : style.width) || width[size]), (style === null || style === void 0 ? void 0 : style.height) || height[size], (style === null || style === void 0 ? void 0 : style.padding) || "0", __assign({}, style));
}; });
var templateObject_1;
//# sourceMappingURL=container.js.map