import React from "react";
import { CheckboxSize } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenCheckbox } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CheckIcon } from "../icon";
export const Checkbox = ({ size = CheckboxSize.sm, onClick, style, theme = Theme, disabled = false, checked, }) => {
    const handleClick = (e) => {
        if (disabled)
            return;
        onClick && onClick(e);
    };
    return (React.createElement(Container, null,
        React.createElement(HiddenCheckbox, { defaultChecked: checked }),
        React.createElement(Content, { checked: checked, onClick: handleClick, size: size, style: style, theme: theme, disabled: disabled }, checked && React.createElement(CheckIcon, { stroke: disabled ? theme.palette.gray300 : theme.palette.white }))));
};
//# sourceMappingURL=index.js.map