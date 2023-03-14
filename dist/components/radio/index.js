import React from "react";
import { Container } from "./styles/container";
import { Content, HiddenRadio } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CircleIcon } from "../icon";
export const Radio = ({ checked = false, size = "sm", onClick, style, theme = Theme, disabled = false, }) => {
    return (React.createElement(Container, null,
        React.createElement(HiddenRadio, { checked: checked }),
        React.createElement(Content, { checked: checked, onClick: onClick, size: size, style: style, theme: theme, disabled: disabled },
            React.createElement(CircleIcon, null))));
};
//# sourceMappingURL=index.js.map