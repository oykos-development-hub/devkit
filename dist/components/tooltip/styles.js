var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
var backgroundColor = function (props) { return (props.variant === "standard" ? "white" : "#004FFF"); };
var color = function (props) { return (props.variant === "standard" ? "black" : "white"); };
var TooltipPositions = {
    top: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    & #tooltip-content {\n      left: 50%;\n      bottom: 100%;\n      transform: translate(-50%, -0.75em);\n    }\n  "], ["\n    & #tooltip-content {\n      left: 50%;\n      bottom: 100%;\n      transform: translate(-50%, -0.75em);\n    }\n  "]))),
    topLeft: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    & #tooltip-content {\n      right: 100%;\n      bottom: 100%;\n      transform: translate(1.5em, -0.75em);\n    }\n  "], ["\n    & #tooltip-content {\n      right: 100%;\n      bottom: 100%;\n      transform: translate(1.5em, -0.75em);\n    }\n  "]))),
    topRight: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    & #tooltip-content {\n      left: 100%;\n      bottom: 100%;\n      transform: translate(-1.5em, -0.75em);\n    }\n  "], ["\n    & #tooltip-content {\n      left: 100%;\n      bottom: 100%;\n      transform: translate(-1.5em, -0.75em);\n    }\n  "]))),
    left: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    & #tooltip-content {\n      top: 50%;\n      right: 100%;\n      transform: translate(-0.75em, -50%);\n    }\n  "], ["\n    & #tooltip-content {\n      top: 50%;\n      right: 100%;\n      transform: translate(-0.75em, -50%);\n    }\n  "]))),
    bottom: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    & #tooltip-content {\n      top: 100%;\n      left: 50%;\n      transform: translate(-50%, 0.75em);\n    }\n  "], ["\n    & #tooltip-content {\n      top: 100%;\n      left: 50%;\n      transform: translate(-50%, 0.75em);\n    }\n  "]))),
    right: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    & #tooltip-content {\n      top: 50%;\n      left: 100%;\n      transform: translate(0.75em, -50%);\n    }\n  "], ["\n    & #tooltip-content {\n      top: 50%;\n      left: 100%;\n      transform: translate(0.75em, -50%);\n    }\n  "]))),
};
var sharedArrowStyles = css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  content: \"\";\n  position: absolute;\n  border: 6px solid;\n"], ["\n  content: \"\";\n  position: absolute;\n  border: 6px solid;\n"])));
var ArrowPositions = {
    top: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    #tooltip-content::after {\n      ", "\n      top: 100%;\n      left: 50%;\n      transform: translateX(-50%);\n      border-color: ", " transparent transparent transparent;\n    }\n  "], ["\n    #tooltip-content::after {\n      ", "\n      top: 100%;\n      left: 50%;\n      transform: translateX(-50%);\n      border-color: ", " transparent transparent transparent;\n    }\n  "])), sharedArrowStyles, backgroundColor),
    topLeft: css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    #tooltip-content::after {\n      ", "\n      top: 100%;\n      left: 100%;\n      transform: translateX(-1.5em);\n      border-color: ", " transparent transparent transparent;\n    }\n  "], ["\n    #tooltip-content::after {\n      ", "\n      top: 100%;\n      left: 100%;\n      transform: translateX(-1.5em);\n      border-color: ", " transparent transparent transparent;\n    }\n  "])), sharedArrowStyles, backgroundColor),
    topRight: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    #tooltip-content::after {\n      ", "\n      top: 100%;\n      right: 100%;\n      transform: translateX(1.5em);\n      border-color: ", " transparent transparent transparent;\n    }\n  "], ["\n    #tooltip-content::after {\n      ", "\n      top: 100%;\n      right: 100%;\n      transform: translateX(1.5em);\n      border-color: ", " transparent transparent transparent;\n    }\n  "])), sharedArrowStyles, backgroundColor),
    left: css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    #tooltip-content::after {\n      ", "\n      top: 50%;\n      left: 100%;\n      transform: translateY(-50%);\n      border-color: transparent transparent transparent ", ";\n    }\n  "], ["\n    #tooltip-content::after {\n      ", "\n      top: 50%;\n      left: 100%;\n      transform: translateY(-50%);\n      border-color: transparent transparent transparent ", ";\n    }\n  "])), sharedArrowStyles, backgroundColor),
    bottom: css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    #tooltip-content::after {\n      ", "\n      left: 50%;\n      bottom: 100%;\n      transform: translateX(-50%);\n      border-color: transparent transparent ", " transparent;\n    }\n  "], ["\n    #tooltip-content::after {\n      ", "\n      left: 50%;\n      bottom: 100%;\n      transform: translateX(-50%);\n      border-color: transparent transparent ", " transparent;\n    }\n  "])), sharedArrowStyles, backgroundColor),
    right: css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    #tooltip-content::after {\n      ", "\n      top: 50%;\n      right: 100%;\n      transform: translateY(-50%);\n      border-color: transparent ", " transparent transparent;\n    }\n  "], ["\n    #tooltip-content::after {\n      ", "\n      top: 50%;\n      right: 100%;\n      transform: translateY(-50%);\n      border-color: transparent ", " transparent transparent;\n    }\n  "])), sharedArrowStyles, backgroundColor),
};
var tooltipPosition = function (props) { return TooltipPositions[props.position]; };
var arrowPosition = function (props) { return (!!props.arrow ? ArrowPositions[props.position] : null); };
export var StyledTooltip = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: relative;\n\n  #tooltip-content {\n    visibility: hidden;\n    background-color: ", ";\n    border-radius: 0.5em;\n    white-space: nowrap;\n    z-index: 1;\n    text-align: center;\n    padding: 0.5em 0.75em;\n    position: absolute;\n    box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);\n    & h6,\n    & p {\n      color: ", ";\n    }\n  }\n\n  &:hover #tooltip-content {\n    visibility: visible;\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n\n  #tooltip-content {\n    visibility: hidden;\n    background-color: ", ";\n    border-radius: 0.5em;\n    white-space: nowrap;\n    z-index: 1;\n    text-align: center;\n    padding: 0.5em 0.75em;\n    position: absolute;\n    box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);\n    & h6,\n    & p {\n      color: ", ";\n    }\n  }\n\n  &:hover #tooltip-content {\n    visibility: visible;\n  }\n\n  ", "\n  ", "\n"])), backgroundColor, color, tooltipPosition, arrowPosition);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=styles.js.map