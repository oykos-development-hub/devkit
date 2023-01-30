import React from "react";
import { ButtonSizes, ButtonVariants } from "./types";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
export var Button = function (_a) {
    var onClick = _a.onClick, content = _a.content, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? ButtonVariants.primary : _c, _d = _a.size, size = _d === void 0 ? ButtonSizes.lg : _d, style = _a.style, theme = _a.theme;
    return (React.createElement(Container, { style: style, disabled: disabled, variant: variant, size: size, onClick: onClick, theme: theme },
        React.createElement(Content, { size: size, disabled: disabled, variant: variant, theme: theme, style: style }, content)));
};
//# sourceMappingURL=index.js.map