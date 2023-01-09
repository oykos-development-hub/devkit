var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { confirmedColor, errorColor, focusColor } from "./shared/colors";
import { wrapperStyles } from "./shared/wrapper-styles";
export var StyledMainWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  & #input-content-wrapper:after {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 2px;\n    width: 100%;\n    background-color: ", ";\n    transform: scale(0, 1);\n    transition: transform 0.3s;\n  }\n\n  & #input-content-wrapper:focus-within:after {\n    transform: scale(1, 1);\n    transition: all 0.3s;\n  }\n"], ["\n  ", "\n\n  & #input-content-wrapper:after {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 2px;\n    width: 100%;\n    background-color: ", ";\n    transform: scale(0, 1);\n    transition: transform 0.3s;\n  }\n\n  & #input-content-wrapper:focus-within:after {\n    transform: scale(1, 1);\n    transition: all 0.3s;\n  }\n"])), wrapperStyles, function (props) {
    return props.error ? errorColor(props) : props.confirmed ? confirmedColor(props) : focusColor(props);
});
var templateObject_1;
//# sourceMappingURL=standard.js.map