import React from "react";
import { Content } from "./styles/content";
import { Container } from "./styles/container";
import { Wrapper } from "./styles/wrapper";
import { CloseIcon } from "../icon";
import { Typography } from "../typography";
import { Theme } from "../../shared/theme";
export const Alert = ({ variant = "success", content, description, icon, closeIcon = true, onClose, size = "md", style, theme = Theme, className, }) => {
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
    return (React.createElement(Container, { variant: variant, style: style, theme: theme, className: className },
        React.createElement(Wrapper, { size: size, theme: theme, variant: variant },
            React.createElement(Content, { theme: theme },
                icon && icon,
                React.createElement(Typography, { variant: textVariant(), content: content, theme: theme })),
            closeIcon && (React.createElement(Content, { theme: theme, onClick: onClose },
                React.createElement(CloseIcon, { stroke: "white" })))),
        description && description));
};
//# sourceMappingURL=index.js.map