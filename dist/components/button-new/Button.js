import React from "react";
import { Container, Content } from "./styles";
var Button = function (_a) {
    var onClick = _a.onClick, content = _a.content, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.size, size = _d === void 0 ? "lg" : _d, style = _a.style, theme = _a.theme;
    return (React.createElement(Container, { style: style, disabled: disabled, variant: variant, size: size, onClick: onClick, theme: theme },
        React.createElement(Content, { size: size, disabled: disabled, variant: variant, theme: theme }, content)));
};
export default Button;
//# sourceMappingURL=Button.js.map