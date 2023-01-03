var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { shared, disabledColor, tertiaryColor } from "./shared";
export var StyledTertiaryButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  background-color: transparent;\n  border-color: transparent;\n  color: ", ";\n\n  &:disabled {\n    border-color: transparent;\n    color: ", ";\n  }\n"], ["\n  ", ";\n  background-color: transparent;\n  border-color: transparent;\n  color: ", ";\n\n  &:disabled {\n    border-color: transparent;\n    color: ", ";\n  }\n"])), shared, function (props) { return tertiaryColor(props); }, function (props) { return disabledColor(props); });
var templateObject_1;
//# sourceMappingURL=tertiary.js.map