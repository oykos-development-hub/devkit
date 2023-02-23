var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { Positions } from "../../types";
var sharedArrowStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  content: \"\";\n  position: absolute;\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 1px;\n"], ["\n  content: \"\";\n  position: absolute;\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 1px;\n"])));
var ArrowPositions = {
    top: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    &::after {\n      ", "\n      top: calc(100% - 0.5em);\n      left: 50%;\n      transform: translateX(-50%) rotate(45deg);\n    }\n  "], ["\n    &::after {\n      ", "\n      top: calc(100% - 0.5em);\n      left: 50%;\n      transform: translateX(-50%) rotate(45deg);\n    }\n  "])), sharedArrowStyles),
    topLeft: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    &::after {\n      ", "\n      top: calc(100% - 0.5em);\n      left: 100%;\n      transform: translateX(-1.75em) rotate(45deg);\n    }\n  "], ["\n    &::after {\n      ", "\n      top: calc(100% - 0.5em);\n      left: 100%;\n      transform: translateX(-1.75em) rotate(45deg);\n    }\n  "])), sharedArrowStyles),
    topRight: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    &::after {\n      ", "\n      top:calc(100% - 0.5em);\n      right: 100%;\n      transform: translateX(1.75em) rotate(45deg);\n    }\n  "], ["\n    &::after {\n      ", "\n      top:calc(100% - 0.5em);\n      right: 100%;\n      transform: translateX(1.75em) rotate(45deg);\n    }\n  "])), sharedArrowStyles),
    left: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    &::after {\n      ", "\n      top: 50%;\n      left: calc(100% - 0.5em);\n      transform: translateY(-50%) rotate(45deg);\n    }\n  "], ["\n    &::after {\n      ", "\n      top: 50%;\n      left: calc(100% - 0.5em);\n      transform: translateY(-50%) rotate(45deg);\n    }\n  "])), sharedArrowStyles),
    bottom: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    &::after {\n      ", "\n      left: 50%;\n      bottom: calc(100% - 0.5em);\n      transform: translateX(-50%) rotate(45deg);\n    }\n  "], ["\n    &::after {\n      ", "\n      left: 50%;\n      bottom: calc(100% - 0.5em);\n      transform: translateX(-50%) rotate(45deg);\n    }\n  "])), sharedArrowStyles),
    right: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    &::after {\n      ", "\n      top: 50%;\n      right: calc(100% - 0.5em);\n      transform: translateY(-50%) rotate(45deg);\n    }\n  "], ["\n    &::after {\n      ", "\n      top: 50%;\n      right: calc(100% - 0.5em);\n      transform: translateY(-50%) rotate(45deg);\n    }\n  "])), sharedArrowStyles),
};
export var arrowPosition = function (position, arrow) {
    return arrow ? ArrowPositions[Positions[position]] : null;
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=arrowPositions.js.map