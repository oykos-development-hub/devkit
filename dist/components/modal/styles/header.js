var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { H6 } from "../../typography/styles/variants";
import { Path } from "../../icon/styles/shared";
export var ModalHeader = styled.div(function (_a) {
    var theme = _a.theme;
    var gray500 = theme.palette.gray500;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    ", " {\n      flex-grow: 1;\n    }\n\n    & ", " {\n      fill: ", ";\n    }\n  "], ["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    ", " {\n      flex-grow: 1;\n    }\n\n    & ", " {\n      fill: ", ";\n    }\n  "])), H6, Path, gray500);
});
var templateObject_1;
//# sourceMappingURL=header.js.map