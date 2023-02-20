var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { Path, Svg } from "../styles/shared";
var DangerIcon = function (props) { return (React.createElement(Svg, __assign({ onClick: props.onClick, "data-testid": "danger-icon", viewBox: "0 0 20 20" }, props),
    React.createElement(Path, __assign({ d: "M10 4a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1zM10 14a1 1 0 100 2 1 1 0 000-2z" }, props)),
    React.createElement(Path, __assign({ fillRule: "evenodd", d: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM2 10a8 8 0 1016 0 8 8 0 00-16 0z", clipRule: "evenodd" }, props)))); };
export default DangerIcon;
//# sourceMappingURL=DangerIcon.js.map