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
import { Path, Svg } from "../styles/elements";
var CircleCheckIcon = function (props) { return (React.createElement(Svg, __assign({ "data-testid": "circle-check-icon", viewBox: "0 0 23 22", onClick: props.onClick }, props),
    React.createElement(Path, { d: "M9.743 15.314L5.5 11.07l1.414-1.414 2.829 2.828 5.656-5.657 1.415 1.415-7.071 7.07z" }),
    React.createElement(Path, { fillRule: "evenodd", d: "M.5 11c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11zm11 9a9 9 0 110-18 9 9 0 010 18z", clipRule: "evenodd" }))); };
export default CircleCheckIcon;
//# sourceMappingURL=CircleCheckIcon.js.map