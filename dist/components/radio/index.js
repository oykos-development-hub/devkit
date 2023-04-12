import React, { useState } from "react";
import { Container } from "./styles/container";
import { Content, HiddenRadio } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CircleIcon } from "../icon";
export const Radio = ({ size = "sm", onClick, style, theme = Theme, disabled = false }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleClick = (e) => {
        if (disabled)
            return;
        setIsChecked(!isChecked);
        onClick && onClick(e);
    };
    return (React.createElement(Container, null,
        React.createElement(HiddenRadio, { checked: isChecked }),
        React.createElement(Content, { checked: isChecked, onClick: handleClick, size: size, style: style, theme: theme, disabled: disabled },
            React.createElement(CircleIcon, null))));
};
//# sourceMappingURL=index.js.map