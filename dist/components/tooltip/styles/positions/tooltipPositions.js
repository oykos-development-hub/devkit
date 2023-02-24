var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { Positions } from "../../types";
var TooltipPositions = {
    top: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    & > div {\n      left: 50%;\n      bottom: 100%;\n      transform: translate(-50%, -0.75em);\n    }\n  "], ["\n    & > div {\n      left: 50%;\n      bottom: 100%;\n      transform: translate(-50%, -0.75em);\n    }\n  "]))),
    topLeft: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    & > div {\n      right: 100%;\n      bottom: 100%;\n      transform: translate(1.5em, -0.75em);\n    }\n  "], ["\n    & > div {\n      right: 100%;\n      bottom: 100%;\n      transform: translate(1.5em, -0.75em);\n    }\n  "]))),
    topRight: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    & > div {\n      left: 100%;\n      bottom: 100%;\n      transform: translate(-1.5em, -0.75em);\n    }\n  "], ["\n    & > div {\n      left: 100%;\n      bottom: 100%;\n      transform: translate(-1.5em, -0.75em);\n    }\n  "]))),
    left: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    & > div {\n      top: 50%;\n      right: 100%;\n      transform: translate(-0.75em, -50%);\n    }\n  "], ["\n    & > div {\n      top: 50%;\n      right: 100%;\n      transform: translate(-0.75em, -50%);\n    }\n  "]))),
    bottom: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    & > div {\n      top: 100%;\n      left: 50%;\n      transform: translate(-50%, 0.75em);\n    }\n  "], ["\n    & > div {\n      top: 100%;\n      left: 50%;\n      transform: translate(-50%, 0.75em);\n    }\n  "]))),
    right: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    & > div {\n      top: 50%;\n      left: 100%;\n      transform: translate(0.75em, -50%);\n    }\n  "], ["\n    & > div {\n      top: 50%;\n      left: 100%;\n      transform: translate(0.75em, -50%);\n    }\n  "]))),
};
export var tooltipPosition = function (position) { return TooltipPositions[Positions[position]]; };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=tooltipPositions.js.map