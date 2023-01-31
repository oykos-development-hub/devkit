var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { AlertSizes, AlertVariants } from "../types";
import React from "react";
import { IconContainer } from "../styles/icon-container";
import { Typography } from "../../typography";
import styled from "styled-components";
var StyledContent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n"])));
export var Content = function (_a) {
    var content = _a.content, _b = _a.variant, variant = _b === void 0 ? AlertVariants.success : _b, _c = _a.additionalText, additionalText = _c === void 0 ? "" : _c, _d = _a.closeIcon, closeIcon = _d === void 0 ? false : _d, onClose = _a.onClose, _e = _a.size, size = _e === void 0 ? AlertSizes.lg : _e, style = _a.style, theme = _a.theme;
    return (React.createElement(StyledContent, null,
        React.createElement(IconContainer, { variant: variant, className: "left", size: size, closeIcon: closeIcon, onClose: onClose },
            React.createElement(Typography, { variant: "h6", content: content, theme: theme, style: style })),
        additionalText && React.createElement(Typography, { variant: "p", content: additionalText })));
};
var templateObject_1;
//# sourceMappingURL=content.js.map