import React from "react";
import { CheckboxSize } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenCheckbox, Icon } from "./styles/content";
import { Theme } from "../../shared/theme";
export const Checkbox = ({ checked = false, size = CheckboxSize.sm, onClick, style, theme = Theme, disabled = false, }) => {
    return (React.createElement(Container, null,
        React.createElement(HiddenCheckbox, { checked: checked }),
        React.createElement(Content, { checked: checked, onClick: onClick, size: size, style: style, theme: theme, disabled: disabled },
            React.createElement(Icon, { theme: theme, disabled: disabled },
                React.createElement("path", { d: "M10 3L4.5 8.5L2 6" })))));
};
//# sourceMappingURL=index.js.map