import React from "react";
import { ButtonSizes, ButtonVariants } from "./types";
import { Container } from "./styles/container";
import { Content } from "./styles/content";
import { Theme } from "../../shared/theme";
export const Button = ({ onClick, content, disabled = false, variant = ButtonVariants.primary, size = ButtonSizes.lg, style, theme, }) => {
    return (React.createElement(Container, { style: style, disabled: disabled, variant: variant, size: size, onClick: onClick, theme: theme || Theme },
        React.createElement(Content, { size: size, disabled: disabled, variant: variant, theme: theme || Theme, customStyle: style }, content)));
};
//# sourceMappingURL=index.js.map