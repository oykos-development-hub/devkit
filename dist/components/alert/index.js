import React from "react";
import { AlertSizes, AlertVariants } from "./types";
import { Content } from "./styles/content";
import { Container, Row } from "./styles/container";
import { XIcon } from "../icon";
import { Typography } from "../typography";
import { Theme } from "../../shared/theme";
export const Alert = ({ variant = AlertVariants.success, content, additionalText, icon, closeIcon = true, onClose, size = AlertSizes.md, style, theme = Theme, }) => (React.createElement(Container, { variant: variant, style: style, theme: theme },
    React.createElement(Row, { size: size },
        React.createElement(Content, { style: style, size: size, theme: theme },
            icon && icon,
            React.createElement(Typography, { content: content, theme: theme, style: style })),
        closeIcon && (React.createElement(Content, { style: style, size: size, theme: theme },
            React.createElement(XIcon, { onClick: onClose })))),
    additionalText && (React.createElement(Row, { size: size },
        React.createElement(Content, { style: style, size: size, theme: theme },
            React.createElement(Typography, { content: additionalText, theme: theme, style: style }))))));
//# sourceMappingURL=index.js.map