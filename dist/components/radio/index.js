import React from "react";
import { RadioSize } from "./types";
import { Container } from "./styles/container";
import { Circle, Content, HiddenRadio, Icon } from "./styles/content";
import { Theme } from "../../shared/theme";
export var Radio = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? RadioSize.sm : _c, onClick = _a.onClick, style = _a.style, _d = _a.theme, theme = _d === void 0 ? Theme : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e;
    return (React.createElement(Container, null,
        React.createElement(HiddenRadio, { checked: checked }),
        React.createElement(Content, { checked: checked, onClick: onClick, size: size, style: style, theme: theme, disabled: disabled },
            React.createElement(Icon, { viewBox: "0 0 24 24" },
                React.createElement(Circle, { style: style, theme: theme, disabled: disabled })))));
};
//# sourceMappingURL=index.js.map