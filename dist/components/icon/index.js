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
export var Icon = function (props) {
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: props.width || 30, height: props.height || props.width, className: props.className, fill: props.fill, onClick: props.onClick, viewBox: "0 0 14 10" }, props),
        React.createElement("path", { fill: props.fill || "#7E8A96", fillRule: "evenodd", d: "M0 5a.5.5 0 01.5-.5h11.793L9.146 1.354a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L12.293 5.5H.5A.5.5 0 010 5z", clipRule: "evenodd" })));
};
//# sourceMappingURL=index.js.map