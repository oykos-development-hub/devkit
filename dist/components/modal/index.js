import React from "react";
import { Variants } from "./types";
import { Container } from "./styles/container";
import { Theme } from "../../shared/theme";
import { ModalBox } from "./styles/modal";
import { ModalHeader } from "./styles/header";
import { Typography } from "../typography";
import { XIcon } from "../icon";
export const Modal = ({ theme = Theme, title, content, open, onClose, variant = Variants["light"], style, }) => {
    return (React.createElement(Container, { open: open, onClick: onClose && onClose() },
        React.createElement(ModalBox, { theme: theme, variant: variant, onClick: (e) => {
                e.stopPropagation();
            }, style: style },
            React.createElement(ModalHeader, { theme: theme },
                title && React.createElement(Typography, { content: title, variant: "h6" }),
                React.createElement(XIcon, { size: "1rem", onClick: onClose && onClose() })),
            content && content)));
};
//# sourceMappingURL=index.js.map