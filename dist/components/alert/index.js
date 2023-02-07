import React from "react";
import { AlertSizes, AlertVariants } from "./types";
import { Content } from "./styles/content";
import { Container, Row } from "./styles/container";
import { XIcon } from "../icon";
import { Typography } from "../typography";
import { LeftIconContent } from "./styles/icon-content";
export var Alert = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? AlertVariants.success : _b, content = _a.content, additionalText = _a.additionalText, _c = _a.closeIcon, closeIcon = _c === void 0 ? true : _c, onClose = _a.onClose, _d = _a.size, size = _d === void 0 ? AlertSizes.xs : _d, style = _a.style, theme = _a.theme;
    return (React.createElement(Container, { variant: variant, size: size, style: style, theme: theme },
        React.createElement(Row, { size: size },
            React.createElement(Content, { style: style },
                React.createElement(LeftIconContent, { variant: variant }),
                React.createElement(Typography, { variant: "h6", content: content, theme: theme, style: style })),
            closeIcon && (React.createElement(Content, { style: style },
                React.createElement(XIcon, { onClick: onClose })))),
        additionalText && (React.createElement(Row, { size: size },
            React.createElement(Typography, { variant: "p", content: additionalText })))));
};
//# sourceMappingURL=index.js.map