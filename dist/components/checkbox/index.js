import React from "react";
import { CheckboxSize } from "./types";
import { Container } from "./styles/container";
import { Content, HiddenCheckbox, Icon } from "./styles/content";
import { Theme } from "../../shared/theme";
import { CheckIcon } from "./checkIcon";
export var Checkbox = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? CheckboxSize.sm : _c, onClick = _a.onClick, style = _a.style, _d = _a.theme, theme = _d === void 0 ? Theme : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e;
    return (React.createElement(Container, null,
        React.createElement(HiddenCheckbox, { checked: checked }),
        React.createElement(Content, { checked: checked, onClick: onClick, size: size, style: style, theme: theme, disabled: disabled },
            React.createElement(Icon, { theme: theme, disabled: disabled },
                React.createElement(CheckIcon, null)))));
};
//# sourceMappingURL=index.js.map