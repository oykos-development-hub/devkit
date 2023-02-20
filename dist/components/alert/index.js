import React from "react";
import { AlertSizes, AlertVariants } from "./types";
import { Content } from "./styles/content";
import { Container, Row } from "./styles/container";
import { XIcon } from "../icon";
import { Typography } from "../typography";
export var Alert = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? AlertVariants.success : _b, content = _a.content, additionalText = _a.additionalText, icon = _a.icon, _c = _a.closeIcon, closeIcon = _c === void 0 ? true : _c, onClose = _a.onClose, _d = _a.size, size = _d === void 0 ? AlertSizes.md : _d, style = _a.style, theme = _a.theme;
    return (React.createElement(Container, { variant: variant, style: style, theme: theme },
        React.createElement(Row, { size: size },
            React.createElement(Content, { style: style, size: size, theme: theme },
                icon && icon,
                React.createElement(Typography, { content: content, theme: theme, style: style })),
            closeIcon && (React.createElement(Content, { style: style, size: size, theme: theme },
                React.createElement(XIcon, { onClick: onClose })))),
        additionalText && (React.createElement(Row, { size: size },
            React.createElement(Content, { style: style, size: size, theme: theme },
                React.createElement(Typography, { content: additionalText, theme: theme, style: style }))))));
};
//# sourceMappingURL=index.js.map