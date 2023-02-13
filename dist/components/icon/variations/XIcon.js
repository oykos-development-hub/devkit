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
var XIcon = function (props) { return (React.createElement(Svg, __assign({ "data-testid": "x-icon", viewBox: "0 0 8 8", onClick: props.onClick }, props),
    React.createElement(Path, __assign({ fillRule: "evenodd", d: "M.646.646a.5.5 0 01.708 0L4 3.293 6.646.646a.5.5 0 11.708.708L4.707 4l2.647 2.646a.5.5 0 11-.708.708L4 4.707 1.354 7.354a.5.5 0 11-.708-.708L3.293 4 .646 1.354a.5.5 0 010-.708z", clipRule: "evenodd" }, props)))); };
export default XIcon;
//# sourceMappingURL=XIcon.js.map