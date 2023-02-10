import React from "react";
import { Container } from "./styles/container";
import { Theme } from "../../shared/theme";
import { ModalBox } from "./styles/modal";
import { ModalHeader } from "./styles/header";
import { Typography } from "../typography";
import { XIcon } from "../icon";
export var Modal = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? Theme : _b, title = _a.title, content = _a.content, open = _a.open, onClose = _a.onClose, _c = _a.variant, variant = _c === void 0 ? "light" : _c, style = _a.style;
    return (React.createElement(Container, { open: open, onClick: onClose && onClose() },
        React.createElement(ModalBox, { theme: theme, variant: variant, onClick: function (e) {
                e.stopPropagation();
            }, style: style },
            React.createElement(ModalHeader, { theme: theme },
                title && React.createElement(Typography, { content: title, variant: "h6" }),
                React.createElement(XIcon, { size: "16px", onClick: onClose && onClose() })),
            content)));
};
//# sourceMappingURL=index.js.map