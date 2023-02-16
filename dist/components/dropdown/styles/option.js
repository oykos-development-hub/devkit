var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
export var Option = styled.div(function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    var _b = theme.palette, gray900 = _b.gray900, gray600 = _b.gray600;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    & * {\n      color: ", ";\n    }\n    & > div:first-child {\n      display: flex;\n      align-items: center;\n      gap: 1em;\n    }\n\n    & .option-icon {\n      display: flex;\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    & * {\n      color: ", ";\n    }\n    & > div:first-child {\n      display: flex;\n      align-items: center;\n      gap: 1em;\n    }\n\n    & .option-icon {\n      display: flex;\n    }\n  "])), isDisabled ? gray600 : gray900);
});
var templateObject_1;
//# sourceMappingURL=option.js.map