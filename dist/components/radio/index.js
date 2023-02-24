import React from "react";
import { RadioSize } from "./types";
import { Container } from "./styles/container";
import { Circle, Content, HiddenRadio, Icon } from "./styles/content";
import { Theme } from "../../shared/theme";
export const Radio = ({ checked = false, size = RadioSize.sm, onClick, style, theme = Theme, disabled = false, }) => {
    return (React.createElement(Container, null,
        React.createElement(HiddenRadio, { checked: checked }),
        React.createElement(Content, { checked: checked, onClick: onClick, size: size, style: style, theme: theme, disabled: disabled },
            React.createElement(Icon, { viewBox: "0 0 24 24" },
                React.createElement(Circle, { style: style, theme: theme, disabled: disabled })))));
};
//# sourceMappingURL=index.js.map