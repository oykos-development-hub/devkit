var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
export var Container = styled.div(function (_a) {
    var theme = _a.theme;
    var gray900 = theme.palette.gray900;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    gap: 0.5em;\n\n    & *,\n    & ", " {\n      font-family: \"Inter\";\n      color: ", ";\n    }\n\n    & > div {\n      position: relative;\n    }\n  "], ["\n    display: flex;\n    flex-direction: column;\n    gap: 0.5em;\n\n    & *,\n    & ", " {\n      font-family: \"Inter\";\n      color: ", ";\n    }\n\n    & > div {\n      position: relative;\n    }\n  "])), BodyMedium, gray900);
});
var templateObject_1;
//# sourceMappingURL=container.js.map