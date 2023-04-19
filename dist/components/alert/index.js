import React from "react";
import { Content } from "./styles/content";
import { Container } from "./styles/container";
import { Wrapper } from "./styles/wrapper";
import { CloseIcon } from "../icon";
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
                return "bodyLarge";
        }
    };
    return (React.createElement(Container, { variant: variant, style: style, theme: theme },
        React.createElement(Wrapper, { size: size, theme: theme, variant: variant },
            React.createElement(Content, { size: size, theme: theme },
                icon && icon,
                React.createElement(Typography, { variant: textVariant(), content: content, theme: theme })),
            closeIcon && (React.createElement(Content, { size: size, theme: theme },
                React.createElement(CloseIcon, { stroke: "white", onClick: onClose })))),
        description && (React.createElement(Wrapper, { size: size },
            React.createElement(Content, { size: size, theme: theme },
                React.createElement(Typography, { variant: "bodyMedium", content: description, theme: theme }))))));
};
//# sourceMappingURL=index.js.map