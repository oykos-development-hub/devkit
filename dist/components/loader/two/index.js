var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styled from "styled-components";
import { rotation, rotationBackwards } from "../../../shared/animations/rotation";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n\n  & #loader {\n    width: ", ";\n    height: ", ";\n  }\n\n  & #loader-ring-1 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n\n  & #loader-ring-2 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n\n  & #loader {\n    width: ", ";\n    height: ", ";\n  }\n\n  & #loader-ring-1 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n\n  & #loader-ring-2 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n"])), function (props) { return props.wrapperBackgroundColor || 'transparent'; }, function (props) { return props.width || '120px'; }, function (props) { return props.height || '120px'; }, function (props) { return props.primaryColor || 'red'; }, rotation, function (props) { return props.secondaryColor || 'green'; }, rotationBackwards);
export var Loader = function (props) {
    return (React.createElement(Wrapper, __assign({}, props),
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { margin: "auto" }, display: "block", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100", id: "loader" },
            React.createElement("circle", { cx: "50", cy: "50", r: "32", fill: "none", strokeDasharray: "50.26548245743669 50.26548245743669", strokeLinecap: "round", strokeWidth: "2", id: "loader-ring-1" }),
            React.createElement("circle", { cx: "50", cy: "50", r: "23", fill: "none", strokeDasharray: "36.12831551628262 36.12831551628262", strokeDashoffset: "36.128", strokeLinecap: "round", strokeWidth: "2", id: "loader-ring-2" }))));
};
var templateObject_1;
//# sourceMappingURL=index.js.map