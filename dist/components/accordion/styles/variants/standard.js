var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { collapsedColor, wrapperStyles } from "../shared";
export var StyledMainWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  & #accordion-header:after {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    top: 100%;\n    height: 2px;\n    width: 100%;\n    background-color: ", ";\n    transform: ", ";\n    transition: transform 0.3s ease-out;\n  }\n"], ["\n  ", "\n\n  & #accordion-header:after {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    top: 100%;\n    height: 2px;\n    width: 100%;\n    background-color: ", ";\n    transform: ", ";\n    transition: transform 0.3s ease-out;\n  }\n"])), wrapperStyles, function (props) { return collapsedColor(props); }, function (props) { return "scale(".concat(!!props.collapsed ? "1" : "0", ", 1)"); });
var templateObject_1;
//# sourceMappingURL=standard.js.map