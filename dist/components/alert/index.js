import React from "react";
import { AlertSizes, AlertVariants } from "./types";
import { Content } from "./styles/content";
import { Container } from "./styles/container";
export var Alert = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? AlertVariants.primary : _b, content = _a.content, additionalText = _a.additionalText, closeIcon = _a.closeIcon, _c = _a.size, size = _c === void 0 ? AlertSizes.lg : _c, style = _a.style, theme = _a.theme;
    return (React.createElement(Container, { variant: variant, size: size, style: style, theme: theme },
        React.createElement(Content, { variant: variant, content: content, size: size, additionalText: additionalText, closeIcon: closeIcon, style: style })));
};
//# sourceMappingURL=index.js.map