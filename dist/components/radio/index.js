import React from "react";
import { Container } from "./styles/container";
import { Content, HiddenRadio } from "./styles/content";
import { Theme } from "../../shared/theme";
import CircleIcon from "../icon/variations/CircleIcon";
export const Radio = ({ checked = false, size = "sm", onClick, style, theme = Theme, disabled = false, }) => {
    const handleClick = (e) => {
        if (disabled)
            return;
        onClick && onClick(e);
    };
    return (React.createElement(Container, null,
        React.createElement(HiddenRadio, { checked: checked }),
        React.createElement(Content, { checked: checked, onClick: handleClick, size: size, style: style, theme: theme, disabled: disabled },
            React.createElement(CircleIcon, { fill: disabled ? (style === null || style === void 0 ? void 0 : style.fill) || theme.palette.gray300 : theme.palette.primary500, stroke: disabled ? (style === null || style === void 0 ? void 0 : style.stroke) || theme.palette.gray300 : theme.palette.primary500 }))));
};
//# sourceMappingURL=index.js.map