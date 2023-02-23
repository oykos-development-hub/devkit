var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { tooltipPosition } from "./positions/tooltipPositions";
export var Container = styled.div(function (_a) {
    var position = _a.position;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n\n    &:hover > div {\n      visibility: visible;\n    }\n\n    ", "\n  "], ["\n    position: relative;\n\n    &:hover > div {\n      visibility: visible;\n    }\n\n    ", "\n  "])), tooltipPosition(position));
});
var templateObject_1;
//# sourceMappingURL=container.js.map