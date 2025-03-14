import React from "react";
import { ModalContainer } from "./styles/container";
import { Theme } from "../../shared/theme";
import { ModalBox } from "./styles/modal";
import { ModalHeader } from "./styles/header";
import { Typography } from "../typography";
import { XIcon } from "../icon";
import { CloseButtonContainer } from "./styles/closeContainer";
export const Modal = ({ theme = Theme, title, content, open, onClose, variant, style, className, outsideClickClose = true, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(ModalContainer, { open: open, onMouseDown: outsideClickClose ? onClose : undefined, className: className },
            React.createElement(ModalBox, { theme: theme, variant: variant, onMouseDown: (e) => {
                    if (outsideClickClose) {
                        e.stopPropagation();
                    }
                }, onClick: (e) => {
                    e.stopPropagation();
                }, style: style, className: "modalbox" },
                React.createElement(ModalHeader, { theme: theme },
                    title && React.createElement(Typography, { content: title, variant: "h6" }),
                    React.createElement(CloseButtonContainer, null,
                        React.createElement(XIcon, { size: "1rem", onClick: onClose }))),
                content && content))));
};
//# sourceMappingURL=index.js.map