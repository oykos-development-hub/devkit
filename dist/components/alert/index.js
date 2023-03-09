import React from "react";
import { Content } from "./styles/content";
import { Container } from "./styles/container";
import { Wrapper } from "./styles/wrapper";
import { XIcon } from "../icon";
import { Typography } from "../typography";
import { Theme } from "../../shared/theme";
export const Alert = ({ variant = "success", content, description, icon, closeIcon = true, onClose, size = "md", style, theme = Theme, }) => {
    const textVariant = () => {
        switch (size) {
            case "sm":
                return "bodySmall";
            case "md":
                return "bodyMedium";
            case "lg":
                return "bodyMedium";
        }
    };
    return (React.createElement(Container, { variant: variant, style: style, theme: theme },
        React.createElement(Wrapper, { size: size },
            React.createElement(Content, { style: style, size: size, theme: theme },
                icon && icon,
                React.createElement(Typography, { variant: textVariant(), content: content, theme: theme, style: style })),
            closeIcon && (React.createElement(Content, { style: style, size: size, theme: theme },
                React.createElement(XIcon, { onClick: onClose })))),
        description && (React.createElement(Wrapper, { size: size, style: { paddingTop: 0 } },
            React.createElement(Content, { style: style, size: size, theme: theme },
                React.createElement(Typography, { variant: "bodyMedium", content: description, theme: theme, style: style }))))));
};
//# sourceMappingURL=index.js.map