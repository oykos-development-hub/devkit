var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
export var Container = styled.div(function (_a) {
    var label = _a.label, error = _a.error, theme = _a.theme, hint = _a.hint;
    var _b = theme.palette, error500 = _b.error500, gray700 = _b.gray700, gray900 = _b.gray900;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    min-width: ", ";\n    padding: ", " 0 ", " 0;\n    font-size: 16px;\n\n    & * {\n      font-size: 1em;\n      font-family: \"Inter\", sans-serif;\n      color: ", ";\n    }\n\n    & > div {\n      position: relative;\n    }\n\n    ", ":first-child {\n      position: absolute;\n      top: -2em;\n      left: 0;\n    }\n\n    ", ":last-child {\n      position: absolute;\n      bottom: -2em;\n      left: 0;\n      color: ", ";\n    }\n  "], ["\n    width: 100%;\n    min-width: ", ";\n    padding: ", " 0 ", " 0;\n    font-size: 16px;\n\n    & * {\n      font-size: 1em;\n      font-family: \"Inter\", sans-serif;\n      color: ", ";\n    }\n\n    & > div {\n      position: relative;\n    }\n\n    ", ":first-child {\n      position: absolute;\n      top: -2em;\n      left: 0;\n    }\n\n    ", ":last-child {\n      position: absolute;\n      bottom: -2em;\n      left: 0;\n      color: ", ";\n    }\n  "])), label ? "200px" : "3em", label ? "1.75em" : 0, error || hint ? "1.75em" : 0, gray900, BodyMedium, BodyMedium, error ? error500 : gray700);
});
var templateObject_1;
//# sourceMappingURL=container.js.map