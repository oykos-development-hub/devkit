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
import { rotation, rotationBackwards } from "../../shared/animations/rotation";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & #loader {\n    width: ", ";\n    height: ", ";\n  }\n\n  & #loader-ring-1 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n\n  & #loader-ring-2 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & #loader {\n    width: ", ";\n    height: ", ";\n  }\n\n  & #loader-ring-1 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n\n  & #loader-ring-2 {\n    stroke: ", ";\n    animation: ", " 1.5s linear infinite;\n    transform-origin: center;\n  }\n"])), function (props) { var _a, _b, _c; return props.wrapperBackgroundColor || ((_c = (_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.dark) === null || _c === void 0 ? void 0 : _c.four) || "transparent"; }, function (props) { return props.width || "120px"; }, function (props) { return props.height || "120px"; }, function (props) { var _a, _b, _c; return props.primaryColor || ((_c = (_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.main) === null || _c === void 0 ? void 0 : _c.two) || "red"; }, rotation, function (props) { var _a, _b, _c; return props.secondaryColor || ((_c = (_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.important) === null || _c === void 0 ? void 0 : _c.two) || "green"; }, rotationBackwards);
export var Two = function (props) {
    return (React.createElement(Wrapper, __assign({}, props),
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { margin: "auto" }, display: "block", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100", id: "loader" },
            React.createElement("circle", { cx: "50", cy: "50", r: "32", fill: "none", strokeDasharray: "50.26548245743669 50.26548245743669", strokeLinecap: "round", strokeWidth: "2", id: "loader-ring-1" }),
            React.createElement("circle", { cx: "50", cy: "50", r: "23", fill: "none", strokeDasharray: "36.12831551628262 36.12831551628262", strokeDashoffset: "36.128", strokeLinecap: "round", strokeWidth: "2", id: "loader-ring-2" }))));
};
var templateObject_1;
//# sourceMappingURL=two.js.map