import React from "react";
import { ButtonSizes, ButtonVariants } from "./types";
import { Theme } from "../../shared/theme";
import { ButtonContainer, ButtonContent } from "./styles";
export const Button = ({ onClick, content, customContent, disabled = false, variant = ButtonVariants.primary, size = ButtonSizes.lg, style, theme, className, type = "button", loading = false, loader, }) => {
    return (React.createElement(ButtonContainer, { style: style, disabled: disabled, variant: variant, size: size, onClick: onClick, theme: theme || Theme, className: className, type: type, loading: loading }, customContent ? (customContent) : (React.createElement(React.Fragment, null,
        React.createElement(ButtonContent, { size: size, disabled: disabled, variant: variant, theme: theme || Theme, customStyle: style }, content),
        loading && !!loader && loader))));
};
//# sourceMappingURL=index.js.map