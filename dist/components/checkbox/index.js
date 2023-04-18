import React, { useState } from "react";
import { CheckboxSize } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenCheckbox } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CheckIcon } from "../icon";
export const Checkbox = ({ size = CheckboxSize.sm, onClick, style, theme = Theme, disabled = false, }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleClick = (e) => {
        if (disabled)
            return;
        setIsChecked(!isChecked);
        onClick && onClick(e);
    };
    return (React.createElement(Container, null,
        React.createElement(HiddenCheckbox, { checked: isChecked }),
        React.createElement(Content, { checked: isChecked, onClick: handleClick, size: size, style: style, theme: theme, disabled: disabled }, isChecked && React.createElement(CheckIcon, { stroke: disabled ? theme.palette.gray300 : theme.palette.white }))));
};
//# sourceMappingURL=index.js.map