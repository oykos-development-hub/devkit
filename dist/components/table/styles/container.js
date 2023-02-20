var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
export var Container = styled.div(function (_a) {
    var theme = _a.theme;
    var _b = theme.palette, gray300 = _b.gray300, gray900 = _b.gray900;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    & * {\n      font-family: \"Inter\";\n      color: ", ";\n    }\n\n    & > * {\n      padding: 1em;\n    }\n\n    border: 1px solid ", ";\n    border-radius: ", ";\n    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);\n  "], ["\n    & * {\n      font-family: \"Inter\";\n      color: ", ";\n    }\n\n    & > * {\n      padding: 1em;\n    }\n\n    border: 1px solid ", ";\n    border-radius: ", ";\n    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);\n  "])), gray900, gray300, theme.borderRadius.lg || "0.5em");
});
var templateObject_1;
//# sourceMappingURL=container.js.map