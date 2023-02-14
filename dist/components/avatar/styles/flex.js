var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { rem } from "polished";
export var Flex = styled.div(function () { return function (_a) {
    var alignItems = _a.alignItems, gap = _a.gap;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: ", ";\n    gap: ", ";\n  "], ["\n    display: flex;\n    align-items: ", ";\n    gap: ", ";\n  "])), alignItems || "center", gap || rem("6px"));
}; });
var templateObject_1;
//# sourceMappingURL=flex.js.map