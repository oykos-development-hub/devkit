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
export var StyledTable = styled.table(function (_a) {
    var theme = _a.theme, style = _a.style;
    var gray300 = theme.palette.gray300;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    border-collapse: collapse;\n\n    & thead {\n      & th {\n        padding: 1rem;\n        font-size: 12px;\n        font-weight: normal;\n      }\n\n      & div {\n        display: flex;\n        gap: 0.5em;\n        align-items: center;\n      }\n    }\n\n    & tbody {\n      & td {\n        height: 4.5rem;\n        box-sizing: border-box;\n        padding: 1rem;\n        font-size: 14px;\n      }\n\n      & tr:last-child {\n        border-bottom: 0;\n      }\n    }\n\n    & tr {\n      border-bottom: 1px solid ", ";\n    }\n\n    ", ";\n  "], ["\n    width: 100%;\n    border-collapse: collapse;\n\n    & thead {\n      & th {\n        padding: 1rem;\n        font-size: 12px;\n        font-weight: normal;\n      }\n\n      & div {\n        display: flex;\n        gap: 0.5em;\n        align-items: center;\n      }\n    }\n\n    & tbody {\n      & td {\n        height: 4.5rem;\n        box-sizing: border-box;\n        padding: 1rem;\n        font-size: 14px;\n      }\n\n      & tr:last-child {\n        border-bottom: 0;\n      }\n    }\n\n    & tr {\n      border-bottom: 1px solid ", ";\n    }\n\n    ", ";\n  "])), gray300, __assign({}, style));
});
var templateObject_1;
//# sourceMappingURL=table.js.map